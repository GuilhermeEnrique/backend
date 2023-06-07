/*
  Warnings:

  - Added the required column `userId` to the `Personagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atributo" ALTER COLUMN "force" DROP NOT NULL,
ALTER COLUMN "dexterity" DROP NOT NULL,
ALTER COLUMN "constitution" DROP NOT NULL,
ALTER COLUMN "intelligence" DROP NOT NULL,
ALTER COLUMN "wisdom" DROP NOT NULL,
ALTER COLUMN "charisma" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Campanhas" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "banner" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inventario" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Personagem" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "personality" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "classe" DROP NOT NULL,
ALTER COLUMN "race" DROP NOT NULL,
ALTER COLUMN "banner" DROP NOT NULL,
ALTER COLUMN "level" DROP NOT NULL,
ALTER COLUMN "life" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Personagem" ADD CONSTRAINT "Personagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
