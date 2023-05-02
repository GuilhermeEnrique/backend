import { Request, Response } from "express";
import { CreateCampanhasService } from "../../services/campanhas/CreateCampanhaService";

class CreateCampanhaController {
    async handle(req: Request, res: Response) {
        const { title, description } = req.body;

        const createCampanhasService = new CreateCampanhasService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            const { originalname, filename: banner } = req.file;
            
            const campanha = await createCampanhasService.execute({
                title,
                description,
                banner
            });

            return res.json(campanha);
        }
    }
}


export { CreateCampanhaController }