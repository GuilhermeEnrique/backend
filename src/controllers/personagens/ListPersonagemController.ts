import { Request, Response } from "express";
import { ListPersonagemService } from "../../services/personagens/ListPersonagemService";

class ListPersonagemController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const listByCampanha = new ListPersonagemService();

        const personagens = await listByCampanha.execute({ id });

        return res.json(personagens); 
    }
}

export { ListPersonagemController }