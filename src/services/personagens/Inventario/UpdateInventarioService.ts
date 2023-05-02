import prismaClient from "../../../prisma";

interface IRequest {
    id: string;
    name: string;
    type: string;
    description: string;
    amount: number;
    personagemId: string;
}

class UpdateInventarioService {
    async execute({ id, name, type, description, amount, personagemId }: IRequest) {
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
                name,
                type,
                description,
                amount,
                personagemId,
            },
        });

        return updatedInventario;
    }
}

export { UpdateInventarioService };