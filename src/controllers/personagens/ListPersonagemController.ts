import { Request, Response } from "express";
import { ListPersonagemService } from "../../services/personagens/ListPersonagemService";

class ListPersonagemController {
    async handle(req: Request, res: Response) {
        const campanhasId = req.query.campanhasId as string; //Lê o parâmetro campanhaId da requisição HTTP, que foi enviado como query string.
        const userId = req.query.userId as string; //Lê o parâmetro userId da requisição HTTP, que foi enviado como query string.

        const listByCampanha = new ListPersonagemService();

        const personagens = await listByCampanha.execute({ campanhasId, userId });

        return res.json(personagens); //Retorna a lista de personagens como resposta HTTP, no formato JSON
    }
}

export { ListPersonagemController }