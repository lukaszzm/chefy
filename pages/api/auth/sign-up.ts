import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

interface ICredentials {
  email: string;
  name: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed." });

  const { email, name, password }: ICredentials = req.body;
  const fixedEmail = email.toLowerCase();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: fixedEmail,
      },
    });

    if (user)
      return res.status(409).json({ message: "This email is already used." });

    const allCategoriesIds = await prisma.category.findMany({
      select: { id: true },
    });

    const allAreasIds = await prisma.area.findMany({
      select: { id: true },
    });

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
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}
