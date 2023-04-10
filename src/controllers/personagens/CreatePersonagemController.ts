import { Request, Response } from "express";
import { CreatePersonagemService } from "../../services/personagens/CreatePersonagemService";

class CreatePersonagemController {
    async handle(req: Request, res: Response) {
        const { nome, descricao, classe, nivel, raca, pontosDeVida, campanhasId } = req.body;

        const createPersonagemService = new CreatePersonagemService();

        const personagem = await createPersonagemService.execute({
            nome,
            descricao,
            classe,
            nivel,
            raca,
            pontosDeVida,
            campanhasId,
        });
        return res.json(personagem)
    }
}

export { CreatePersonagemController }
