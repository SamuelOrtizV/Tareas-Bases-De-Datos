-- CreateTable
CREATE TABLE "diplomacias" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN NOT NULL,

    CONSTRAINT "diplomacias_pkey" PRIMARY KEY ("id_reino_1","id_reino_2")
);

-- CreateTable
CREATE TABLE "reino_tiene_defensa" (
    "id_reino" INTEGER NOT NULL,
    "id_defensa" INTEGER NOT NULL,
    "fecha_instalacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reino_tiene_defensa_pkey" PRIMARY KEY ("id_reino","id_defensa")
);

-- CreateTable
CREATE TABLE "defensas" (
    "id" SERIAL NOT NULL,
    "defensa" TEXT NOT NULL,

    CONSTRAINT "defensas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reino_tiene_defensa" ADD CONSTRAINT "reino_tiene_defensa_id_reino_fkey" FOREIGN KEY ("id_reino") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reino_tiene_defensa" ADD CONSTRAINT "reino_tiene_defensa_id_defensa_fkey" FOREIGN KEY ("id_defensa") REFERENCES "defensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
