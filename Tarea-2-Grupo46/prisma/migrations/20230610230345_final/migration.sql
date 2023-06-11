/*
  Warnings:

  - A unique constraint covering the columns `[id_personaje]` on the table `personaje_habita_reino` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "personaje_habita_reino_id_personaje_key" ON "personaje_habita_reino"("id_personaje");
