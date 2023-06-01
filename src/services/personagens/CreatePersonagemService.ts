import prismaClient from "../../prisma";
interface PersongemRequest {
    name: string;
    description: string;
    personality: string;
    classe: string;
    race: string;
    level: string;
    life: string;
    banner: string;
    campanhasId: string;
    userId: string;
}
class CreatePersonagemService {
    async execute({ name, description,personality,  classe, race, banner, level, life, campanhasId, userId }: PersongemRequest) {
        if (name === '' || description === '') {
            throw new Error('Preencha os campos corretamente');
        }
        const personagem = await prismaClient.personagem.create({
            data: {
                name: name,
                description: description,
                personality: personality,
                classe: classe,
                race: race,
                banner: banner,
                level: parseInt(level, 10),
                life: parseInt(life, 10),
                campanhasId: campanhasId,
                userId: userId
            }
        })
        return personagem;
    }
}
export { CreatePersonagemService }