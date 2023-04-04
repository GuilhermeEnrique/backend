import { Request, Response } from "express";
import { DeleteItensService } from "../../../services/personagens/Inventario/DeleteItensService";

class DeleteItensController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const deleteItens = new DeleteItensService();
        const itens = await deleteItens.execute({id});

        return res.json(itens);
    }
}
export { DeleteItensController }