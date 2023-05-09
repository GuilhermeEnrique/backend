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
            }, include: {
                campanhas: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        })
        return findByCampanha;
    }
}

export { ListPersonagemService }