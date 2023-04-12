import prismaClient from "../../../prisma";

interface IRequest {
    id: string;
    nomeDoItem: string;
    tipoDoItem: string;
    descricao: string;
    quantidade: number;
    personagemId: string;
}

class UpdateInventarioService {
    async execute({ id, nomeDoItem, tipoDoItem, descricao, quantidade, personagemId }: IRequest) {
        const inventario = await prismaClient.inventario.findUnique({
            where: {
                id,
            },
        });
        if (!inventario) {
            throw new Error("Item do inventário não encontrado");
        }

        const updatedInventario = await prismaClient.inventario.update({
            where: {
                id,
            },
            data: {
                ...inventario,
                nomeDoItem,
                tipoDoItem,
                descricao,
                quantidade,
                personagemId,
            },
        });

        return updatedInventario;
    }
}

export { UpdateInventarioService };