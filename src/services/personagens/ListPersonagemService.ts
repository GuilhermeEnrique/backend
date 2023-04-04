import prismaClient from "../../prisma";

interface PersonagemRequest {
    campanhasId: string;
}

class ListPersonagemService {
    async execute({ campanhasId }: PersonagemRequest) {
        const findByCampanha = await prismaClient.personagem.findMany({
            where: {
                campanhasId: campanhasId
            }
        })

        return findByCampanha;
    }
}

export { ListPersonagemService }