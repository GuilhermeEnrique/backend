import prismaClient from "../../prisma";
interface IRequest {
    id: string;
    name?: string;
    description?: string;
    personality?: string;
    classe?: string;
    level?: number;
    race?: string;
    life?: number;
    banner?: string;
}
class UpdatePersonagemService {
    async execute({ id, name, description, personality, level, classe, race, life, banner }: IRequest) {
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
                name: name || personagem.name,
                description: description || personagem.description,
                personality: personality || personagem.personality,
                classe: classe || personagem.classe,
                level: level || personagem.level,
                race: race || personagem.race,
                life: life || personagem.life,
                banner: name || personagem.name,
            },
        });
        return updatedPersonagem;
    }
}

export { UpdatePersonagemService };