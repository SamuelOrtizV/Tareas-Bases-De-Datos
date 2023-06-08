/*
  Warnings:

  - You are about to drop the column `name` on the `personajes` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `personajes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personajes" DROP COLUMN "name",
ADD COLUMN     "nombre" TEXT NOT NULL;
