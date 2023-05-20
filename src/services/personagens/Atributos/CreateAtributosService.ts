import prismaClient from "../../../prisma";
interface AtributosRequest {
    force: number;
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    personagemId: string;
}
class CreateAtributosService {
    async execute({ force, dexterity, constitution, intelligence, wisdom, charisma, personagemId }: AtributosRequest) {
        const atributos = await prismaClient.atributo.create({
            data: {
                force: force,
                dexterity: dexterity,
                constitution: constitution,
                intelligence: intelligence,
                wisdom: wisdom,
                charisma: charisma,
                personagemId: personagemId
            }, select: {
                id: true,
                force: true,
                dexterity: true,
                constitution: true,
                intelligence: true,
                wisdom: true,
                charisma: true,
                personagemId: true
            }
        })
        return atributos
    }
}
export { CreateAtributosService }