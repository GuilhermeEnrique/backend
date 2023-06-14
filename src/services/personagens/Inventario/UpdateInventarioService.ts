import prismaClient from "../../../prisma";
interface IRequest {
    id: string;
    name: string;
    type: string;
    description: string;
    amount: string;
    personagemId: string;
}
class UpdateInventarioService {
    async execute({ id, name, type, description, amount, personagemId }: IRequest) {
        const updatedInventario = await prismaClient.inventario.update({
            where: {
                id
            },
            data: {
                name: name,
                type: type,
                description: description,
                amount: parseInt(amount, 10),
                personagemId: personagemId,
            },
        });
        return updatedInventario;
    }
}
export { UpdateInventarioService };