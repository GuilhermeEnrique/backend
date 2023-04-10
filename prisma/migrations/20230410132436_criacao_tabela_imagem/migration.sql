/*
  Warnings:

  - You are about to drop the column `icon_campanha` on the `Campanhas` table. All the data in the column will be lost.
  - You are about to drop the column `icon_personagem` on the `Personagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campanhas" DROP COLUMN "icon_campanha";

-- AlterTable
ALTER TABLE "Personagem" DROP COLUMN "icon_personagem";

-- CreateTable
CREATE TABLE "Imagem" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "personagemId" TEXT,
    "campanhasId" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Imagem" ADD CONSTRAINT "Imagem_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagem" ADD CONSTRAINT "Imagem_campanhasId_fkey" FOREIGN KEY ("campanhasId") REFERENCES "Campanhas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
