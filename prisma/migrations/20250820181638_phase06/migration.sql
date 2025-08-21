/*
  Warnings:

  - Changed the type of `cin` on the `Producteur` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Producteur" DROP COLUMN "cin",
ADD COLUMN     "cin" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Producteur_cin_key" ON "Producteur"("cin");
