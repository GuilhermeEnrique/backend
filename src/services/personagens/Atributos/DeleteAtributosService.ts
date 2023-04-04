import prismaClient from "../../../prisma";

interface DeleteAtributosRequest {
    id: string;
}

class DeleteAtributosService {
    async execute({ id }: DeleteAtributosRequest) {
        const atributos = await prismaClient.atributo.delete({
            where: {
                id: id
            }
        })
        return atributos;
    }
}

export { DeleteAtributosService }