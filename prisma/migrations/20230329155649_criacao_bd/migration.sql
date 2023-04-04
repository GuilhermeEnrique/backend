-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "biografia" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campanhas" (
    "id" TEXT NOT NULL,
    "icon_campanha" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Campanhas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personagem" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,
    "raca" TEXT NOT NULL,
    "pontosDeVida" INTEGER NOT NULL,
    "campanhasId" TEXT,

    CONSTRAINT "Personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" TEXT NOT NULL,
    "nomeDoItem" TEXT NOT NULL,
    "tipoDoItem" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidade" INTEGER NOT NULL,
    "personagemId" TEXT NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atributo" (
    "id" TEXT NOT NULL,
    "forca" INTEGER NOT NULL,
    "destreza" INTEGER NOT NULL,
    "constituicao" INTEGER NOT NULL,
    "inteligencia" INTEGER NOT NULL,
    "sabedoria" INTEGER NOT NULL,
    "carisma" INTEGER NOT NULL,
    "personagemId" TEXT NOT NULL,

    CONSTRAINT "Atributo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Personagem" ADD CONSTRAINT "Personagem_campanhasId_fkey" FOREIGN KEY ("campanhasId") REFERENCES "Campanhas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atributo" ADD CONSTRAINT "Atributo_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
