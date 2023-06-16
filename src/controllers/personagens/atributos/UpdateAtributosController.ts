import { Request, Response } from "express";
import { UpdateAtributosService } from "../../../services/personagens/Atributos/UpdateAtributosService";

class UpdateAtributosController {
    async handle(req: Request, res: Response) {
        const { personagemId, force, dexterity, constitution, intelligence, wisdom, charisma } = req.body;

        const updateAtributos = new UpdateAtributosService();
        const atributos = await updateAtributos.execute({
            personagemId,
            force,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma
        });

        return res.json(atributos);
    }
}

export { UpdateAtributosController };
