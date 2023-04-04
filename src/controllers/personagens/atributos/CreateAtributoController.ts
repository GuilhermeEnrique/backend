import { Request, Response } from "express";
import { CreateAtributosService } from "../../../services/personagens/Atributos/CreateAtributosService";

class CreateAtributosController {
    async handle(req: Request, res: Response) {
        const { forca, destreza, constituicao, inteligencia, sabedoria, carisma, personagemId } = req.body;

        const createAtributosService = new CreateAtributosService();

        const atributos = await createAtributosService.execute({
            forca,
            destreza,
            constituicao,
            inteligencia,
            sabedoria,
            carisma,
            personagemId,
        });

        return res.json(atributos);
    }
}

export { CreateAtributosController };
