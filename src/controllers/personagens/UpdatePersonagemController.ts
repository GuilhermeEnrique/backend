import { Request, Response } from "express";
import { UpdatePersonagemService } from "../../services/personagens/UpdatePersonagemService";

class UpdatePersonagemController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const { nome, descricao, classe, nivel, raca, pontosDeVida } = req.body;
        
        const updatePersonagemService = new UpdatePersonagemService();

        const personagem = await updatePersonagemService.update(id, {
            nome,
            descricao,
            classe,
            nivel,
            raca,
            pontosDeVida
        });

        return res.json(personagem);

    }
}

export { UpdatePersonagemController };