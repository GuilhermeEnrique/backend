import prismaClient from "../../prisma";

interface DeleteCampanhaRequest {
    campanhasId: string
}

class DeleteCampanhaService {
    async execute({ campanhasId }: DeleteCampanhaRequest) {
        // Exclui todos os inventários dos personagens da campanha
        await prismaClient.inventario.deleteMany({
            where: {
                personagem: {
                    campanhasId: campanhasId,
                },
            },
        });

        // Exclui todos os atributos dos personagens da campanha
        await prismaClient.atributo.deleteMany({
            where: {
                personagem: {
                    campanhasId: campanhasId,
                },
            },
        });

        // Exclui todos os personagens da campanha
        await prismaClient.personagem.deleteMany({
            where: {
                campanhasId: campanhasId,
            },
        });

        // Exclui a campanha
        const campanha = await prismaClient.campanhas.delete({
            where: {
                id: campanhasId
            }
        });


        return campanha;
    }
}

export { DeleteCampanhaService }
