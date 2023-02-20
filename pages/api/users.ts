import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
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

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user)
    return res.status(409).json({ message: "This email is already used." });

  const defaultCategoriesIds = await prisma.category.findMany({
    select: { id: true },
  });

  const defaultAreasIds = await prisma.area.findMany({
    select: { id: true },
  });

  await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: bcrypt.hashSync(password, 10),
      prefferedCategories: {
        connect: defaultCategoriesIds,
      },
      prefferedAreas: {
        connect: defaultAreasIds,
      },
    },
  });

  return res.status(201).json({ message: "Success! Successfully registered." });
}
