import { Request, Response } from 'express';
import { UpdatePersonagemService } from '../../services/personagens/UpdatePersonagemService';

class UpdatePersonagemController {
    async handle(request: Request, response: Response) {
        const { id, nome, descricao, classe, nivel, raca, pontosDeVida } = request.body;

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

        return response.json(personagem);
    }
}

export { UpdatePersonagemController };
