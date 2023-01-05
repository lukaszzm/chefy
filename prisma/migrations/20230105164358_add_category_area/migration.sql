/*
  Warnings:

  - You are about to drop the column `area` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the `_RecipeToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `areaId` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RecipeToUser" DROP CONSTRAINT "_RecipeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToUser" DROP CONSTRAINT "_RecipeToUser_B_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "area",
DROP COLUMN "category",
ADD COLUMN     "areaId" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "imageSrc" DROP NOT NULL;

-- DropTable
DROP TABLE "_RecipeToUser";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserLikedRecipes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserDislikedRecipes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Area_name_key" ON "Area"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikedRecipes_AB_unique" ON "_UserLikedRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikedRecipes_B_index" ON "_UserLikedRecipes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserDislikedRecipes_AB_unique" ON "_UserDislikedRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_UserDislikedRecipes_B_index" ON "_UserDislikedRecipes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_title_key" ON "Recipe"("title");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedRecipes" ADD CONSTRAINT "_UserLikedRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedRecipes" ADD CONSTRAINT "_UserLikedRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserDislikedRecipes" ADD CONSTRAINT "_UserDislikedRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserDislikedRecipes" ADD CONSTRAINT "_UserDislikedRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
