/*
  Warnings:

  - Made the column `id_personaje` on table `karts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "karts" DROP CONSTRAINT "karts_id_personaje_fkey";

-- AlterTable
ALTER TABLE "karts" ALTER COLUMN "id_personaje" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "karts" ADD CONSTRAINT "karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
