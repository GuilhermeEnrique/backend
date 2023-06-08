import prismaClient from "../../../prisma";

interface DeleteAtributosRequest {
    personagemId: string;
}

class DeleteAtributosService {
    async execute({ personagemId }: DeleteAtributosRequest) {
        const atributos = await prismaClient.atributo.deleteMany({
            where: {
                personagemId: personagemId
            }
        });
        return atributos;
    }
}

export { DeleteAtributosService };
