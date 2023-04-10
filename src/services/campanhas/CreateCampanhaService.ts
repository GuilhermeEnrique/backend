import prismaClient from "../../prisma";

interface CampanhasRequest {
    titulo: string,
    descricao: string,
}
class CreateCampanhasService {
    async execute({ titulo, descricao }: CampanhasRequest) {
        if (titulo == '') {
            throw new Error('Titulo ínvalido');
        }
        const campanha = await prismaClient.campanhas.create({
            data: {
                titulo: titulo,
                descricao: descricao
            }
        })

        return campanha;
    }
}

export { CreateCampanhasService }