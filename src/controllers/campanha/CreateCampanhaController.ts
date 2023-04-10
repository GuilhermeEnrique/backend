import { Request, Response } from "express";
import { CreateCampanhasService } from "../../services/campanhas/CreateCampanhaService";

class CreateCampanhaController {
    async handle(req: Request, res: Response) {
        const { titulo, descricao } = req.body;

        const createCampanhasService = new CreateCampanhasService();

        const campanha = await createCampanhasService.execute({
            titulo,
            descricao
        });
        return res.json(campanha);
    }
}


export { CreateCampanhaController }