import { Request, Response } from "express";
import { DeleteAtributosService } from "../../../services/personagens/Atributos/DeleteAtributosService";

class DeleteAtributosController {
    async handle(req: Request, res: Response) {
        const personagemId = req.query.personagemId as string;
        const deleteAtributos = new DeleteAtributosService();
        const atributos = await deleteAtributos.execute({
            personagemId
        });
        return res.json(atributos);
    }
}

export { DeleteAtributosController };
