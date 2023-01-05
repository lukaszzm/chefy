/*
  Warnings:

  - You are about to drop the column `instruction` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `imageSrc` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "instruction",
ADD COLUMN     "imageSrc" TEXT NOT NULL,
ADD COLUMN     "instructions" TEXT NOT NULL;
