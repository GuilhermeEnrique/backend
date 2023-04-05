import prismaClient from "../../prisma";

interface IRequest {
    id: string;
    nome: string;
    descricao: string;
    classe: string;
    nivel: number;
    raca: string;
    pontosDeVida: number;
}

class UpdatePersonagemService {
    async execute({ id, nome, descricao, classe, nivel, raca, pontosDeVida }: IRequest) {
        const personagem = await prismaClient.personagem.findUnique({
            where: {
                id,
            },
        });

        if (!personagem) {
            throw new Error("Personagem não encontrado");
        }

        const updatedPersonagem = await prismaClient.personagem.update({
            where: {
                id,
            },
            data: {
                ...personagem,
                nome,
                descricao,
                classe,
                nivel,
                raca,
                pontosDeVida,
            },
        });

        return updatedPersonagem;
    }
}

export { UpdatePersonagemService };


