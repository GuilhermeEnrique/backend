import { Request, Response } from "express";
import { ListPersonagemService } from "../../services/personagens/ListPersonagemService";

class ListPersonagemController {
    async handle(req: Request, res: Response) {
        const campanhasId = req.query.campanhasId as string; //Lê o parâmetro campanha_id da requisição HTTP, que foi enviado como query string.

        const listByCampanha = new ListPersonagemService();

        const personagens = await listByCampanha.execute({ campanhasId });

        return res.json(personagens); //Retorna a lista de personagens como resposta HTTP, no formato JSON
    }
}

export { ListPersonagemController }