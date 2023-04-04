import { Request, Response } from "express";
import { DeleteAtributosService } from "../../../services/personagens/Atributos/DeleteAtributosService";

class DeleteAtributosController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const deleteAtributos = new DeleteAtributosService();
        const atributos = await deleteAtributos.execute({
            id
        });
        return res.json(atributos);
    }
}
    
export { DeleteAtributosController }