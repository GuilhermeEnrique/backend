import prismaClient from "../../prisma";

interface DeletePersongemRequest {
    personagemId: string;
}

class DeletePersonagemService {
    async execute({ personagemId }: DeletePersongemRequest) {
        //exclui todos os itens do inventãrio relacionado ao personagem
        await prismaClient.inventario.deleteMany({
            where: {
                personagemId: personagemId,
            }
        });
        //exclui todos os atributos relacionado ao usuario
        await prismaClient.atributo.deleteMany({
            where: {
                personagemId: personagemId
            }
        });

        const personagem = await prismaClient.personagem.delete({
            where: {
                id: personagemId
            }
        });
        
        return personagem;
    }
}

export { DeletePersonagemService }