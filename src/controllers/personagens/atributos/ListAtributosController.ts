import { Request, Response } from "express";
import { ListAtributosService } from "../../../services/personagens/Atributos/ListAtributosService";

class ListAtributosController {
    async handle(req: Request, res: Response) {
        const personagemId = req.query.personagemId as string;

        const listByPersonagem = new ListAtributosService();

        const atributos = await listByPersonagem.execute({
            personagemId
        });
        return res.json(atributos);
    }
}

export { ListAtributosController }