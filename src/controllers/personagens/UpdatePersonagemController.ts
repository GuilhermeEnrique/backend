import { Request, Response } from 'express';
import { UpdatePersonagemService } from '../../services/personagens/UpdatePersonagemService';

class UpdatePersonagemController {
    async handle(req: Request, res: Response) {
        const { id, name, description, classe, level, race, life } = req.body;
        const updatePersonagemService = new UpdatePersonagemService();
        const personagem = await updatePersonagemService.execute({
            id,
            name,
            description,
            classe,
            level,
            race,
            life,
        });

        return res.json(personagem);
    }
}

export { UpdatePersonagemController };
