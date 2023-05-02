import prismaClient from "../../prisma";

interface CampanhasRequest {
    title: string,
    description: string,
    banner: string
}
class CreateCampanhasService {
    async execute({ title, description, banner }: CampanhasRequest) {
        if (title == '') {
            throw new Error('Titulo ínvalido');
        }
        const campanha = await prismaClient.campanhas.create({
            data: {
                title: title,
                description: description,
                banner: banner
            }
        })
        return campanha;
    }
}

export { CreateCampanhasService }