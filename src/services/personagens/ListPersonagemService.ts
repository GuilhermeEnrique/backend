import prismaClient from "../../prisma";

interface PersonagemRequest {
    id: string;
    userId: string;
    campanhasId: string;
}

class ListPersonagemService {
    async execute({ id, campanhasId, userId }: PersonagemRequest) {
        const findByCampanha = await prismaClient.personagem.findMany({
            where: {
                id: id,
                userId: userId,
                campanhasId: campanhasId
            }, include: {
                Users: {
                    select: {
                        id: true,
                        name: true
                    }
                },
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