import { Personagem, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PersongemRequest {
    nome: string;
    descricao: string;
    classe: string;
    nivel: number;
    raca: string;
    pontosDeVida: number;
}

class UpdatePersonagemService {
    async update(id: string, { nome, descricao, classe, nivel, raca, pontosDeVida, }: PersongemRequest): Promise <Personagem> {
        const personagem = await prisma.personagem.update({
        where: { id: id },
        data: {
            nome: nome,
            descricao,
            classe,
            nivel: { set: nivel },
            raca,
            pontosDeVida: { set: pontosDeVida }
        },
    });

        return personagem;
    }
}

export { UpdatePersonagemService };