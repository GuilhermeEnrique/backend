import prismaClient from "../../prisma";

interface PersongemRequest {
    name: string;
    description: string;
    classe: string;
    race: string;
    level: string;
    life: string;
    banner: string;
    campanhasId: string;
}

class CreatePersonagemService {
    async execute({ name, description, classe, level, race, life, campanhasId }: PersongemRequest) {
        const personagem = await prismaClient.personagem.create({
            data: {
                name: name,
                description: description,
                classe: classe,
                level: parseInt(level, 10),
                race: race,
                life: parseInt(life, 10),
                campanhasId: campanhasId
            }
        })
        return personagem;
    }
}

export { CreatePersonagemService }