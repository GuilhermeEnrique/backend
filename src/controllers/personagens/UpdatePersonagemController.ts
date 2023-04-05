import { Request, Response } from 'express';
import { UpdatePersonagemService } from '../../services/personagens/UpdatePersonagemService';

class UpdatePersonagemController {
    async handle(req: Request, res: Response) {
        const { id, nome, descricao, classe, nivel, raca, pontosDeVida } = req.body;

        const updatePersonagemService = new UpdatePersonagemService();

        const personagem = await updatePersonagemService.execute({
            id,
            nome,
            descricao,
            classe,
            nivel,
            raca,
            pontosDeVida,
        });

        return res.json(personagem);
    }
}

export { UpdatePersonagemController };
