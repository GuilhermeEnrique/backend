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
        const itemsAsString = personagem.map((item) => ({
            ...item,
            level: item.level.toString(),
            life: item.life.toString()
        }));
    
        return itemsAsString;
    }
}

export { ListPersonagemService }