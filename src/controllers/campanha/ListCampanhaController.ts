import { Request, Response } from "express";
import { ListCampanhaService } from "../../services/campanhas/ListCampanhaService";

class ListCampanhaController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const listCampanhaService = new ListCampanhaService();

        const campanha = await listCampanhaService.execute({
            id
        });

        return res.json(campanha);
    }
}
export { ListCampanhaController }