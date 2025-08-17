/*
  Warnings:

  - You are about to alter the column `culture` on the `Champs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `variete` on the `Champs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `irrigation` on the `Champs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(3)`.
  - You are about to alter the column `engrai` on the `Champs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `nomRavageur` on the `Champs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `nature` on the `Echantillon` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `nbrEchantillon` on the `Echantillon` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `analyseAFaire` on the `Echantillon` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.
  - You are about to alter the column `partiePlante` on the `Partie_Plante` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `point1` on the `Plante_Attaque` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `point2` on the `Plante_Attaque` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `point3` on the `Plante_Attaque` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `point4` on the `Plante_Attaque` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `point5` on the `Plante_Attaque` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `nomProd` on the `Producteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `partenaire` on the `Producteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `fokotany` on the `Producteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `commune` on the `Producteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `district` on the `Producteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `region` on the `Producteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `nomProspecteur` on the `Prospecteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `prenProspecteur` on the `Prospecteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `tel` on the `Prospecteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(13)`.
  - You are about to alter the column `password` on the `Prospecteur` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `description` on the `Symptome` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Champs" ALTER COLUMN "culture" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "variete" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "irrigation" SET DATA TYPE VARCHAR(3),
ALTER COLUMN "engrai" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "nomRavageur" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Echantillon" ALTER COLUMN "nature" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "nbrEchantillon" SET DATA TYPE SMALLINT,
ALTER COLUMN "analyseAFaire" SET DATA TYPE VARCHAR(25);

-- AlterTable
ALTER TABLE "Partie_Plante" ALTER COLUMN "partiePlante" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Plante_Attaque" ALTER COLUMN "point1" SET DATA TYPE SMALLINT,
ALTER COLUMN "point2" SET DATA TYPE SMALLINT,
ALTER COLUMN "point3" SET DATA TYPE SMALLINT,
ALTER COLUMN "point4" SET DATA TYPE SMALLINT,
ALTER COLUMN "point5" SET DATA TYPE SMALLINT;

-- AlterTable
ALTER TABLE "Producteur" ALTER COLUMN "nomProd" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "partenaire" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "fokotany" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "commune" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "district" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "region" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Prospecteur" ALTER COLUMN "nomProspecteur" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "prenProspecteur" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "tel" SET DATA TYPE VARCHAR(13),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "Symptome" ALTER COLUMN "description" SET DATA TYPE VARCHAR(200);
