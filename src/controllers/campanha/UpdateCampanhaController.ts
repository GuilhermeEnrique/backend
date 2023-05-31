import { Request, Response } from "express";
import UpdateCampanhaService from "../../services/campanhas/UploadCampanhaService";

class UpdateCampanhaController {
    async handle(req: Request, res: Response) {
        const { title, description } = req.body;
        const id = req.query.id as string;
        
        const updateCampanhaService = new UpdateCampanhaService();

        if (!req.file) {
            const campanha = await updateCampanhaService.execute({
                id,
                title,
                description,
            });

            return res.json(campanha);
        } else {
            const { originalname, filename: banner } = req.file;

            const campanha = await updateCampanhaService.execute({
                id,
                title,
                description,
                banner,
            });

            return res.json(campanha);
        }
    }
}

export { UpdateCampanhaController };
