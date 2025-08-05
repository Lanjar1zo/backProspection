/*
  Warnings:

  - You are about to drop the column `created_at` on the `Echantillon` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Echantillon` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Partie_Plante` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Partie_Plante` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Plante_Attaque` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Plante_Attaque` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Producteur` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Producteur` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Prospecteur` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Prospecteur` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Symptome` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Symptome` table. All the data in the column will be lost.
  - Added the required column `password` to the `Prospecteur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Champs" ALTER COLUMN "ID_Champs" DROP DEFAULT;
DROP SEQUENCE "Champs_ID_Champs_seq";

-- AlterTable
ALTER TABLE "Echantillon" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ALTER COLUMN "ID_Echantillon" DROP DEFAULT;
DROP SEQUENCE "Echantillon_ID_Echantillon_seq";

-- AlterTable
ALTER TABLE "Partie_Plante" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ALTER COLUMN "ID_PartiePlante" DROP DEFAULT;
DROP SEQUENCE "Partie_Plante_ID_PartiePlante_seq";

-- AlterTable
ALTER TABLE "Plante_Attaque" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ALTER COLUMN "ID_PlanteAttaque" DROP DEFAULT;
DROP SEQUENCE "Plante_Attaque_ID_PlanteAttaque_seq";

-- AlterTable
ALTER TABLE "Producteur" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ALTER COLUMN "ID_Producteur" DROP DEFAULT,
ALTER COLUMN "partenaire" DROP NOT NULL;
DROP SEQUENCE "Producteur_ID_Producteur_seq";

-- AlterTable
ALTER TABLE "Prospecteur" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Prospection" ALTER COLUMN "ID_Prospection" DROP DEFAULT;
DROP SEQUENCE "Prospection_ID_Prospection_seq";

-- AlterTable
ALTER TABLE "Symptome" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ALTER COLUMN "ID_Symptome" DROP DEFAULT;
DROP SEQUENCE "Symptome_ID_Symptome_seq";
