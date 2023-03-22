import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const session = await getServerSession(req, res, authOptions);
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return res.status(401).end();
  }

  try {
    await prisma.user.update({
      where: {
        email: userEmail,
      },
      data: {
        dislikedRecipes: {
          connect: {
            id: req.body.id,
          },
        },
      },
    });
    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export default handler;
