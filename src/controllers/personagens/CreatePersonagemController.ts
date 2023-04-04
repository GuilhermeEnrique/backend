import { Request, Response } from "express";
import { CreatePersonagemService } from "../../services/personagens/CreatePersonagemService";

class CreatePersonagemController {
    async handle(req: Request, res: Response) {
        const { nome, descricao, classe, nivel, raca, pontosDeVida, campanhasId} = req.body;

        const createPersonagemService = new CreatePersonagemService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {

            const { originalname, filename: icon_personagem } = req.file;

            const personagem = await createPersonagemService.execute({
                icon_personagem,
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
}
export { CreatePersonagemController }
