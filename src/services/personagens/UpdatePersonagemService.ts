import prismaClient from "../../prisma";
interface IRequest {
    id: string;
    name: string;
    description: string;
    classe: string;
    level: number;
    race: string;
    life: number;
}
class UpdatePersonagemService {
    async execute({ id, name, description, level, classe, race, life }: IRequest) {
        const personagem = await prismaClient.personagem.findUnique({
            where: { id },
        });

        if (!personagem) {
            throw new Error("Personagem não encontrado");
        }
        const updatedPersonagem = await prismaClient.personagem.update({
            where: { id },
            data: {
                ...personagem,
                name,
                description,
                classe,
                level,
                race,
                life,
            },
        });
        return updatedPersonagem;
    }
}

export { UpdatePersonagemService };