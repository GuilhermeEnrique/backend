import { Request, Response } from "express";
import { DeleteCampanhaService } from "../../services/campanhas/DeleteCampanhaService";

class DeleteCamapanhaController {
    async handle(req: Request, res: Response) {
        const deleteCampanha = new DeleteCampanhaService();

        const campanhasId = req.query.campanhasId as string;

        const campanha = await deleteCampanha.execute({ campanhasId });

        return res.json(campanha)
    }
}

export { DeleteCamapanhaController }