import prismaClient from "../../../prisma";

interface DeleteAllItensRequest {
    personagemId: string;
}

class DeleteAllItensService {
    async execute({ personagemId }: DeleteAllItensRequest) {
        const deleteResult = await prismaClient.inventario.deleteMany({
            where: {
                personagemId: personagemId
            }
        });
        return deleteResult
    }
}

export { DeleteAllItensService }