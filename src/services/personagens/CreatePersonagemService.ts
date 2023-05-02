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
    async execute({ name, description, classe, race, banner, level, life, campanhasId }: PersongemRequest) {
        if (name == '') {
            throw new Error('Preencha os campos corretamente');
        }
        const personagem = await prismaClient.personagem.create({

            data: {
                name: name,
                description: description,
                classe: classe,
                race: race,
                banner: banner,
                level: parseInt(level, 10),
                life: parseInt(life, 10),
                campanhasId: campanhasId
            }
        })
        return personagem;
    }
}

export { CreatePersonagemService }