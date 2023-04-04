import { Request, Response } from "express";
import { DeleteAllItensService } from "../../../services/personagens/Inventario/DeleteAllItensService";

class DeleteAllItensController {
    async handle(req: Request, res: Response) {
        const personagemId = req.query.personagemId as string;
        const deleteAll = new DeleteAllItensService();
        const delte = await deleteAll.execute({ personagemId });

        return res.json(delte);
    }
}

export { DeleteAllItensController }