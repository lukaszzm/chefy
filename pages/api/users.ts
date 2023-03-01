import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

interface ICredentials {
  email: string;
  name: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "PATCH")
    return res.status(405).json({ message: "Method not allowed." });

  const allCategoriesIds = await prisma.category.findMany({
    select: { id: true },
  });

  const allAreasIds = await prisma.area.findMany({
    select: { id: true },
  });

  if (req.method === "POST") {
    const { email, name, password }: ICredentials = req.body;
    const fixedEmail = email.toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: fixedEmail,
      },
    });

    if (user)
      return res.status(409).json({ message: "This email is already used." });

    await prisma.user.create({
      data: {
        email: fixedEmail,
        name: name,
        password: bcrypt.hashSync(password, 10),
        prefferedCategories: {
          connect: allCategoriesIds,
        },
        prefferedAreas: {
          connect: allAreasIds,
        },
      },
    });

    return res
      .status(201)
      .json({ message: "Success! Successfully registered." });
  }

  if (req.method === "PATCH") {
    const session = await getServerSession(req, res, authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return res.status(401).end();
    }

    const {
      name,
      prefferedCategories,
      prefferedAreas,
    }: {
      name: string;
      prefferedCategories: string[];
      prefferedAreas: string[];
    } = req.body;

    if (name)
      await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          name,
        },
      });

    if (prefferedCategories) {
      const notPrefferedCategories = allCategoriesIds.filter(
        (el: any) => !prefferedCategories.includes(el.id)
      );
      await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          prefferedCategories: {
            connect: prefferedCategories.map((el) => ({ id: el })) || [],
            disconnect:
              notPrefferedCategories.map((el: any) => ({ id: el.id })) || [],
          },
        },
      });
    }

    if (prefferedAreas) {
      const notPrefferedAreas = allAreasIds.filter(
        (el: any) => !prefferedAreas.includes(el.id)
      );
      await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          prefferedAreas: {
            connect: prefferedAreas.map((el) => ({ id: el })) || [],
            disconnect:
              notPrefferedAreas.map((el: any) => ({ id: el.id })) || [],
          },
        },
      });
    }

    return res.status(204).end();
  }
}
