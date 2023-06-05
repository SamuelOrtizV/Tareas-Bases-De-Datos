/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Personajes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" TEXT,

    CONSTRAINT "Personajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Karts" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "velocidad_maxima" INTEGER,
    "id_personaje" INTEGER NOT NULL,

    CONSTRAINT "Karts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Karts" ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
