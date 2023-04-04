import { Request, Response } from "express";
import { CreateItensService } from "../../../services/personagens/Inventario/CreateItensService";

class CreateItensController {
    async handle(req: Request, res: Response) {
        const { nomeDoItem, tipoDoItem, descricao, quantidade, personagemId } = req.body;
        const createItensService = new CreateItensService();
        const itens = await createItensService.execute({
            nomeDoItem,
            tipoDoItem,
            descricao,
            quantidade,
            personagemId
        });
        return res.json(itens)
    }
}

export { CreateItensController }