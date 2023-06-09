import prismaClient from "../../../prisma";
interface AtributosRequest {
    force: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;
    personagemId: string;
}
class CreateAtributosService {
    async execute({ force, dexterity, constitution, intelligence, wisdom, charisma, personagemId }: AtributosRequest) {
        const atributos = await prismaClient.atributo.create({
            data: {
                force: parseInt(force, 10),
                dexterity: parseInt(dexterity, 10),
                constitution: parseInt(constitution, 10),
                intelligence: parseInt(intelligence, 10),
                wisdom: parseInt(wisdom, 10),
                charisma: parseInt(charisma, 10),
                personagemId: personagemId
            }
        })
        return atributos
    }
}
export { CreateAtributosService }