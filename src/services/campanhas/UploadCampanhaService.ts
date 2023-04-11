import prismaClient from "../../prisma";

interface CRequest {
    id: string;
    titulo: string;
    descricao: string;
}

class UpdateCampanhaService {
    async execute({ id, titulo, descricao }: CRequest) {
        const campanha = await prismaClient.campanhas.findUnique({
            where: {
                id,
            },
        });

        if (!campanha) {
            throw new Error("Campanha não encontrada");
        }

        const updatedCampanha = await prismaClient.campanhas.update({
            where: {
                id,
            },
            data: {
                ...campanha,
                titulo,
                descricao,
            },
        });

        return updatedCampanha;
    }
}

export { UpdateCampanhaService };
