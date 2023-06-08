-- DropForeignKey
ALTER TABLE "karts" DROP CONSTRAINT "karts_id_personaje_fkey";

-- AlterTable
ALTER TABLE "karts" ALTER COLUMN "id_personaje" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "karts" ADD CONSTRAINT "karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personajes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
