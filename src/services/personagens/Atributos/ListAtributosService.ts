import prismaClient from "../../../prisma";

interface AtributosRequest {
    personagemId: string;
}

class ListAtributosService {
    async execute({ personagemId }: AtributosRequest) {
        const findByPersonagem = await prismaClient.atributo.findMany({
            where: {
                personagemId: personagemId
            }
        })
        return findByPersonagem;
    }
}

export { ListAtributosService }