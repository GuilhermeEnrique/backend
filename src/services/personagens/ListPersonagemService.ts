import prismaClient from "../../prisma";

interface PersonagemRequest {
    userId: string;
    campanhasId: string;
}

class ListPersonagemService {
    async execute({ campanhasId, userId }: PersonagemRequest) {
        const findByCampanha = await prismaClient.personagem.findMany({
            where: {
                userId: userId,
                campanhasId: campanhasId
            }
        })

        return findByCampanha;
    }
}

export { ListPersonagemService }