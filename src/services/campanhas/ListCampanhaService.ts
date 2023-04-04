import prismaClient from "../../prisma";

class ListCampanhaService {
    async execute() {
        const campanha = await prismaClient.campanhas.findMany({
            select:{
                id: true,
                titulo: true,
                descricao: true
            }
        })

        return campanha;
    }
}

export { ListCampanhaService }