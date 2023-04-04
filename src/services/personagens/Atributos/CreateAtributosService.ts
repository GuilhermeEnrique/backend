import prismaClient from "../../../prisma";

interface AtributosRequest {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
    personagemId: string;
}

class CreateAtributosService {
    async execute({ forca, destreza, constituicao, inteligencia, sabedoria, carisma, personagemId }: AtributosRequest) {
        const atributos = await prismaClient.atributo.create({
            data: {
                forca: forca,
                destreza: destreza,
                constituicao: constituicao,
                inteligencia: inteligencia,
                sabedoria: sabedoria,
                carisma: carisma,
                personagemId: personagemId
            }, select:{
                id: true,
                forca: true,
                carisma: true,
                constituicao: true,
                inteligencia: true,
                sabedoria: true,
                destreza: true,
                personagemId: true
            }
        })
        return atributos
    }
}

export { CreateAtributosService }