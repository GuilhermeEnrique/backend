import { Request, Response } from 'express';
import { UpdateInventarioService } from '../../../services/personagens/Inventario/UpdateInventarioService';

class UpdateInventarioController {
    async handle(req: Request, res: Response) {
        const { id, name, type, description, amount, personagemId } = req.body;
        const updateInventarioService = new UpdateInventarioService();

        const inventario = await updateInventarioService.execute({
            id,
            name,
            type,
            description,
            amount,
            personagemId,
        });

        return res.json(inventario);
    }
}

export { UpdateInventarioController };