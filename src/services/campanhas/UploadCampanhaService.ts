import prismaClient from "../../prisma";

interface UpdateCampanhaData  {
    id: string;
    title?: string;
    description?: string;
    banner?: string;
}
class UpdateCampanhaService {
    async execute({ id, title, description, banner }: UpdateCampanhaData ) {
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
                id
            },
            data: {
                title: title || campanha.title,
                description: description || campanha.description,
                banner: banner || campanha.banner,
            },
            select: {
                id: true,
                title: true,
                description: true,
                banner: true,
            }
        });

        return updatedCampanha;
    }
}

export default UpdateCampanhaService;