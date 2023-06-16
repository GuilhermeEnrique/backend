import prismaClient from "../../../prisma";
interface UpdateAtributosRequest {
    personagemId: string;
    force: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;
}
class UpdateAtributosService {
    async execute({ personagemId, force, dexterity, constitution, intelligence, wisdom, charisma }: UpdateAtributosRequest) {
        const atributos = await prismaClient.atributo.updateMany({
            where: {
                personagemId: personagemId
            },
            data: {
                force: parseInt(force, 10),
                dexterity: parseInt(dexterity, 10),
                constitution: parseInt(constitution, 10),
                intelligence: parseInt(intelligence, 10),
                wisdom: parseInt(wisdom, 10),
                charisma: parseInt(charisma, 10),
            }
        });
        return atributos;
    }
}

export { UpdateAtributosService };
