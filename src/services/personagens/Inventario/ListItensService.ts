import prismaClient from "../../../prisma";

interface ItensRequest {
    personagemId: string;
}

class ListItensService {
    async execute({ personagemId }: ItensRequest) {
        const findByPersonagem = await prismaClient.inventario.findMany({
            where: {
                personagemId: personagemId
            },
            select: {
                id: true,
                nomeDoItem: true,
                tipoDoItem: true,
                descricao: true,
                quantidade: true,
                personagemId: true
            }
        })
        return findByPersonagem;
    }
}

export { ListItensService }
