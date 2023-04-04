/*
  Warnings:

  - Added the required column `icon_personagem` to the `Personagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Personagem" ADD COLUMN     "icon_personagem" TEXT NOT NULL;
