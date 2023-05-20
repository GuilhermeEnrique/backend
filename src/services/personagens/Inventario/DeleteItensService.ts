import prismaClient from "../../../prisma";

interface DeleteRequest {
    id: string;
}

class DeleteItensService {
    async execute({ id }: DeleteRequest) {
        const itens = await prismaClient.inventario.delete({
            where: { id: id }
        })
        return itens;
    }
}

export { DeleteItensService }