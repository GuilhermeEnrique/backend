import { Request, Response } from "express";
import { DeletePersonagemService } from "../../services/personagens/DeletePersonagemService";

class DeletePersonagemController {
    async handle(req: Request, res: Response) {
        const personagemId = req.query.personagemId as string;
        const deletePersonagem = new DeletePersonagemService();
        const personagem = await deletePersonagem.execute({
            personagemId
        });

        return res.json(personagem);
    }
}

export { DeletePersonagemController }