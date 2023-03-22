import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PATCH")
    return res.status(405).json({ message: "Method not allowed." });

  const session = await getServerSession(req, res, authOptions);
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return res.status(401).end();
  }

  const {
    name,
    prefferedCategories,
    prefferedAreas,
    currentPassword,
    newPassword,
  }: {
    name: string;
    prefferedCategories: string[];
    prefferedAreas: string[];
    currentPassword: string;
    newPassword: string;
  } = req.body;

  try {
    if (name) {
      await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          name,
        },
      });
      return res
        .status(200)
        .json({ message: "Success! Your name has been changed." });
    }

    if (prefferedCategories) {
      const allCategoriesIds = await prisma.category.findMany({
        select: { id: true },
      });

      const notPrefferedCategories = allCategoriesIds.filter(
        (el: { id: string }) => !prefferedCategories.includes(el.id)
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

      return res.status(200).json({
        message: "Success! Your preffered categories has been changed.",
      });
    }

    if (prefferedAreas) {
      const allAreasIds = await prisma.area.findMany({
        select: { id: true },
      });

      const notPrefferedAreas = allAreasIds.filter(
        (el: { id: string }) => !prefferedAreas.includes(el.id)
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

      return res
        .status(200)
        .json({ message: "Success! Your preffered areas has been changed." });
    }

    if (currentPassword && newPassword) {
      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      if (!user) throw new Error("Cannot find the user.");

      const result = user.password
        ? await bcrypt.compare(currentPassword, user.password)
        : false;

      if (!result)
        return res.status(401).json({ message: "Invalid password." });

      await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          password: bcrypt.hashSync(newPassword, 10),
        },
      });
    }

    return res
      .status(200)
      .json({ message: "Success! Your password has been changed." });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export default handler;
