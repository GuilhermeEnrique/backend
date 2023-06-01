import prismaClient from "../../prisma";
interface PersonagemRequest {
    id: string;
}
class ListPersonagemService {
    async execute({ id }: PersonagemRequest) {
        const personagem = await prismaClient.personagem.findMany({
            where: {
                id: id,
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
        return personagem;
    }
}

export { ListPersonagemService }