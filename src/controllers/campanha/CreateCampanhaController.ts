import { Request, Response } from "express";
import { CreateCampanhasService } from "../../services/campanhas/CreateCampanhaService";

class CreateCampanhaController {
    async handle(req: Request, res: Response) {
        const { titulo, descricao } = req.body;

        const createCampanhasService = new CreateCampanhasService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {

            const { originalname, filename: icon_campanha } = req.file;

            const campanha = await createCampanhasService.execute({
                titulo,
                descricao,
                icon_campanha
            });
            return res.json(campanha);
        }
    }
}

export { CreateCampanhaController }