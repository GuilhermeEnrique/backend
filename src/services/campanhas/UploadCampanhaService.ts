import prismaClient from "../../prisma";

interface CRequest {
    id: string;
    title: string;
    description: string;
}

class UpdateCampanhaService {
    async execute({ id, title, description }: CRequest) {
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
                title,
                description,
            },
        });

        return updatedCampanha;
    }
}

export { UpdateCampanhaService };
