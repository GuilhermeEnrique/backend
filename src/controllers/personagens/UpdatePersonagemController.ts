import { Request, Response } from 'express';
import { UpdatePersonagemService } from '../../services/personagens/UpdatePersonagemService';

class UpdatePersonagemController {
    async handle(req: Request, res: Response) {
        const { name, description, personality, classe, level, race, life, banner } = req.body;
        const id = req.query.id as string;

        const updatePersonagemService = new UpdatePersonagemService();
        if (!req.file) {
            const personagem = await updatePersonagemService.execute({
                id,
                name,
                description,
                personality,
                classe,
                level,
                race,
                life
            });

            return res.json(personagem);
        } else {
            const { originalname, filename: banner } = req.file;

            const personagem = await updatePersonagemService.execute({
                id,
                name,
                description,
                personality,
                classe,
                level,
                race,
                life,
                banner
            });

            return res.json(personagem);
        }
    }
}

export { UpdatePersonagemController };
