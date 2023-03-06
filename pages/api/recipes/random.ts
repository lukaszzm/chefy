import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const session = await getServerSession(req, res, authOptions);
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return res.status(401).end();
  }

  const userPreferences = await prisma.user.findUnique({
    where: { email: userEmail },
    select: {
      prefferedAreas: {
        select: { id: true },
      },
      prefferedCategories: {
        select: { id: true },
      },
    },
  });

  if (!userPreferences) throw new Error("Something went wrong.");

  const prefferedAreasIds = userPreferences.prefferedAreas.map((el) => el.id);
  const prefferedCategoriesIds = userPreferences.prefferedCategories.map(
    (el) => el.id
  );

  const recipe = await prisma.recipe.findFirst({
    where: {
      areaId: { in: prefferedAreasIds },
      categoryId: { in: prefferedCategoriesIds },
      AND: [
        {
          NOT: {
            likers: {
              some: {
                email: userEmail,
              },
            },
          },
        },
        {
          NOT: {
            dislikers: {
              some: {
                email: userEmail,
              },
            },
          },
        },
      ],
    },
    include: {
      category: true,
      area: true,
    },
  });

  return res.status(200).json(recipe);
}
