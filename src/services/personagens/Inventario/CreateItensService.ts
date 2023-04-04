import prismaClient from "../../../prisma";
interface ItensRequest {
    nomeDoItem: string;
    tipoDoItem: string;
    descricao: string;
    quantidade: number;
    personagemId: string;
}
class CreateItensService {
    async execute({ nomeDoItem, tipoDoItem, descricao, quantidade, personagemId }: ItensRequest) {
        const itens = await prismaClient.inventario.create({
            data: {
                nomeDoItem: nomeDoItem,
                tipoDoItem: tipoDoItem,
                descricao: descricao,
                quantidade: quantidade,
                personagemId: personagemId
            }
        })
        return itens;
    }
}
export { CreateItensService };