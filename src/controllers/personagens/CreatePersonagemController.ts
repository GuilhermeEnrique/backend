import { Request, Response } from "express";
import { CreatePersonagemService } from "../../services/personagens/CreatePersonagemService";
class CreatePersonagemController {
    async handle(req: Request, res: Response) {
        const { name, description, classe, level, race, life, banner, campanhasId, userId } = req.body;
        const createPersonagemService = new CreatePersonagemService();
        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            const { originalname, filename: banner } = req.file;
            const personagem = await createPersonagemService.execute({
                name,
                description,
                classe,
                level,
                race,
                life,
                banner,
                campanhasId,
                userId
            });
            return res.json(personagem)
        }
    }
}

export { CreatePersonagemController }