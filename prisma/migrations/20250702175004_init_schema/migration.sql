-- CreateTable
CREATE TABLE "Prospection" (
    "ID_Prospection" BIGSERIAL NOT NULL,
    "ID_Prospecteur" BIGINT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prospection_pkey" PRIMARY KEY ("ID_Prospection")
);

-- CreateTable
CREATE TABLE "Prospecteur" (
    "ID_Prospecteur" BIGSERIAL NOT NULL,
    "nomProspecteur" TEXT NOT NULL,
    "prenProspecteur" TEXT NOT NULL,
    "fonction" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prospecteur_pkey" PRIMARY KEY ("ID_Prospecteur")
);

-- CreateTable
CREATE TABLE "Producteur" (
    "ID_Producteur" BIGSERIAL NOT NULL,
    "carteProd" TEXT NOT NULL,
    "nomProd" TEXT NOT NULL,
    "cin" INTEGER NOT NULL,
    "partenaire" TEXT NOT NULL,
    "fokotany" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "ID_Prospecteur" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producteur_pkey" PRIMARY KEY ("ID_Producteur")
);

-- CreateTable
CREATE TABLE "Champs" (
    "ID_Champs" BIGSERIAL NOT NULL,
    "culture" TEXT NOT NULL,
    "variete" TEXT NOT NULL,
    "supTotal" DOUBLE PRECISION NOT NULL,
    "supInfecte" DOUBLE PRECISION NOT NULL,
    "dateSemi" TIMESTAMP(3) NOT NULL,
    "irrigation" TEXT NOT NULL,
    "engrai" TEXT NOT NULL,
    "stadeCroissance" TEXT NOT NULL,
    "santeGle" TEXT NOT NULL,
    "nomRavageur" TEXT NOT NULL,
    "localisation" TEXT NOT NULL,
    "ID_Producteur" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Champs_pkey" PRIMARY KEY ("ID_Champs")
);

-- CreateTable
CREATE TABLE "Plante_Attaque" (
    "ID_PlanteAttaque" BIGSERIAL NOT NULL,
    "point1" INTEGER NOT NULL,
    "point2" INTEGER NOT NULL,
    "point3" INTEGER NOT NULL,
    "point4" INTEGER NOT NULL,
    "point5" INTEGER NOT NULL,
    "tauxInfestation" DOUBLE PRECISION NOT NULL,
    "ID_Champs" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plante_Attaque_pkey" PRIMARY KEY ("ID_PlanteAttaque")
);

-- CreateTable
CREATE TABLE "Partie_Plante" (
    "ID_PartiePlante" BIGSERIAL NOT NULL,
    "partiePlante" TEXT NOT NULL,
    "ID_PlanteAttaque" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partie_Plante_pkey" PRIMARY KEY ("ID_PartiePlante")
);

-- CreateTable
CREATE TABLE "Symptome" (
    "ID_Symptome" BIGSERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "ID_PartiePlante" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Symptome_pkey" PRIMARY KEY ("ID_Symptome")
);

-- CreateTable
CREATE TABLE "Echantillon" (
    "ID_Echantillon" BIGSERIAL NOT NULL,
    "nature" TEXT NOT NULL,
    "poids" DOUBLE PRECISION NOT NULL,
    "nbrEchantillon" INTEGER NOT NULL,
    "analyseAFaire" TEXT NOT NULL,
    "ID_Prospection" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Echantillon_pkey" PRIMARY KEY ("ID_Echantillon")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prospecteur_email_key" ON "Prospecteur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Producteur_carteProd_key" ON "Producteur"("carteProd");

-- CreateIndex
CREATE UNIQUE INDEX "Producteur_cin_key" ON "Producteur"("cin");

-- AddForeignKey
ALTER TABLE "Prospection" ADD CONSTRAINT "Prospection_ID_Prospecteur_fkey" FOREIGN KEY ("ID_Prospecteur") REFERENCES "Prospecteur"("ID_Prospecteur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producteur" ADD CONSTRAINT "Producteur_ID_Prospecteur_fkey" FOREIGN KEY ("ID_Prospecteur") REFERENCES "Prospecteur"("ID_Prospecteur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Champs" ADD CONSTRAINT "Champs_ID_Producteur_fkey" FOREIGN KEY ("ID_Producteur") REFERENCES "Producteur"("ID_Producteur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plante_Attaque" ADD CONSTRAINT "Plante_Attaque_ID_Champs_fkey" FOREIGN KEY ("ID_Champs") REFERENCES "Champs"("ID_Champs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partie_Plante" ADD CONSTRAINT "Partie_Plante_ID_PlanteAttaque_fkey" FOREIGN KEY ("ID_PlanteAttaque") REFERENCES "Plante_Attaque"("ID_PlanteAttaque") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Symptome" ADD CONSTRAINT "Symptome_ID_PartiePlante_fkey" FOREIGN KEY ("ID_PartiePlante") REFERENCES "Partie_Plante"("ID_PartiePlante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Echantillon" ADD CONSTRAINT "Echantillon_ID_Prospection_fkey" FOREIGN KEY ("ID_Prospection") REFERENCES "Prospection"("ID_Prospection") ON DELETE RESTRICT ON UPDATE CASCADE;
