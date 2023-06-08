import { Request, Response } from "express";
import { CreateAtributosService } from "../../../services/personagens/Atributos/CreateAtributosService";

class CreateAtributosController {
    async handle(req: Request, res: Response) {
        const { force, dexterity, constitution, intelligence, wisdom, charisma, personagemId } = req.body;

        const createAtributosService = new CreateAtributosService();

        const atributos = await createAtributosService.execute({
            force,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            personagemId,
        });


        return res.json(atributos);
    }
}

export { CreateAtributosController };
