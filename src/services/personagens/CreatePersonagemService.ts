import prismaClient from "../../prisma";

interface PersongemRequest {
    nome: string;
    descricao: string;
    classe: string;
    raca: string;
    nivel: string;
    pontosDeVida: string
    campanhasId: string;
}

class CreatePersonagemService {
    async execute({ nome, descricao, classe, nivel, raca, pontosDeVida, campanhasId }: PersongemRequest) {
        const personagem = await prismaClient.personagem.create({
            data: {
                nome: nome,
                descricao: descricao,
                classe: classe,
                nivel: parseInt(nivel, 10),
                raca: raca,
                pontosDeVida: parseInt(pontosDeVida,10),
                campanhasId: campanhasId
            }
        })
        return personagem;
    }
}

export { CreatePersonagemService }