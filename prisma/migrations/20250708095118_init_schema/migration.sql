/*
  Warnings:

  - You are about to drop the column `carteProd` on the `Producteur` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Producteur_carteProd_key";

-- AlterTable
ALTER TABLE "Producteur" DROP COLUMN "carteProd";
