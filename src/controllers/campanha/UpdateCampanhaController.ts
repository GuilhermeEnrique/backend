import { Request, Response } from "express";
import { UpdateCampanhaService } from "../../services/campanhas/UploadCampanhaService";

class UpdateCampanhaController {
    async handle(req: Request, res: Response) {
        const { id, titulo, descricao } = req.body;

        const updateCampanhaService = new UpdateCampanhaService();

        const campanha = await updateCampanhaService.execute({
            id,
            titulo,
            descricao,
        });

        return res.json(campanha);
    }
}

export { UpdateCampanhaController };
