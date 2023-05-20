import { Request, Response } from "express";
import { CreateItensService } from "../../../services/personagens/Inventario/CreateItensService";

class CreateItensController {
    async handle(req: Request, res: Response) {
        const { name, type, description, amount, personagemId } = req.body;
        const createItensService = new CreateItensService();
        const itens = await createItensService.execute({
            name,
            type,
            description,
            amount,
            personagemId
        });
        return res.json(itens)
    }
}

export { CreateItensController }