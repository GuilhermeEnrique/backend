import { Request, Response } from "express";
import { ListItensService } from "../../../services/personagens/Inventario/ListItensService";

class ListItensController {
    async handle(req: Request, res: Response) {
        const personagemId = req.query.personagemId as string;

        const listByItens = new ListItensService();

        const itens = await listByItens.execute({
            personagemId
        });

        return res.json(itens)
    }
}

export { ListItensController }