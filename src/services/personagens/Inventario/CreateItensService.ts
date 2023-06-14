import prismaClient from "../../../prisma";
interface ItensRequest {
    name: string;
    type: string;
    description: string;
    amount: string;
    personagemId: string;
}
class CreateItensService {
    async execute({name, type, description, amount, personagemId}: ItensRequest) {
        const itens = await prismaClient.inventario.create({
            data: {
                name: name,
                type: type,
                description: description,
                amount: parseInt(amount, 10),
                personagemId: personagemId
            }
        })
        return itens;
    }
}
export { CreateItensService };