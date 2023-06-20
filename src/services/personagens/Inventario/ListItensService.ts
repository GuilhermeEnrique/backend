import prismaClient from "../../../prisma";
interface ItensRequest {
    personagemId: string;
}
class ListItensService {
    async execute({ personagemId }: ItensRequest) {
        const findByPersonagem = await prismaClient.inventario.findMany({
            where: {
                personagemId: personagemId
            },
            select: {
                id: true,
                name: true,
                type: true,
                description: true,
                amount: true,
                personagemId: true
            }
        })
        const itemsWithAmountAsString = findByPersonagem.map((item) => ({
            ...item,
            amount: item.amount.toString()
        }));
    
        return itemsWithAmountAsString;
    }
}
export { ListItensService }