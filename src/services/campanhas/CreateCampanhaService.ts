import prismaClient from "../../prisma";

interface CampanhasRequest {
    icon_campanha: string,
    titulo: string,
    descricao: string,
}

class CreateCampanhasService {
    async execute({ icon_campanha, titulo, descricao }: CampanhasRequest) {
        if (titulo == '') {
            throw new Error('Titulo ínvalido');
        }
        const campanha = await prismaClient.campanhas.create({
            data: {
                titulo: titulo,
                icon_campanha: icon_campanha,
                descricao: descricao
            }
        })

        return campanha;
    }
}

export { CreateCampanhasService }