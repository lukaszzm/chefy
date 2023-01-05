import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed." });

  const recipe = await prisma.recipe.findFirst({
    where: {
      title: req.body.title,
    },
  });

  if (recipe) return res.status(409).json({ message: "BYŁO JUŻ" });

  await prisma.recipe.create({
    data: {
      imageSrc: req.body.img,
      title: req.body.title,
      category: {
        connect: {
          name: req.body.category,
        },
      },
      area: {
        connect: {
          name: req.body.area,
        },
      },
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    },
  });

  return res.status(204).end();
}
