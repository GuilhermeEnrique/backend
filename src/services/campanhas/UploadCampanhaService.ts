import prismaClient from "../../prisma";
interface CRequest {
    id: string;
    title: string;
    description: string;
    banner: string;
}
class UpdateCampanhaService {
    async execute({ id, title, description, banner }: CRequest) {
        const campanha = await prismaClient.campanhas.findUnique({
            where: { id },
        });

        if (!campanha) {
            throw new Error("Campanha não encontrada");
        }

        const updatedCampanha = await prismaClient.campanhas.update({
            where: { id },
            data: {
                ...campanha,
                title,
                description,
                banner
            },
        });

        return updatedCampanha;
    }
}

export { UpdateCampanhaService };
