/*
  Warnings:

  - Added the required column `userId` to the `Personagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Personagem" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Personagem" ADD CONSTRAINT "Personagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
