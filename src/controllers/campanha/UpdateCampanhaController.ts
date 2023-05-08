import { Request, Response } from "express";
import { UpdateCampanhaService } from "../../services/campanhas/UploadCampanhaService";

class UpdateCampanhaController {
    async handle(req: Request, res: Response) {
        const { id, title, description } = req.body;
        const updateCampanhaService = new UpdateCampanhaService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            const { originalname, filename: banner } = req.file;

            const campanha = await updateCampanhaService.execute({
                id,
                title,
                description,
                banner
            });

            return res.json(campanha);
        }
    }
}
export { UpdateCampanhaController };
