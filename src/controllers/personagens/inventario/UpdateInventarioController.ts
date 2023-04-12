import { Request, Response } from 'express';
import { UpdateInventarioService } from '../../../services/personagens/Inventario/UpdateInventarioService';

class UpdateInventarioController {
    async handle(req: Request, res: Response) {
        const { id, nomeDoItem, tipoDoItem, descricao, quantidade, personagemId } = req.body;
        const updateInventarioService = new UpdateInventarioService();

        const inventario = await updateInventarioService.execute({
            id,
            nomeDoItem,
            tipoDoItem,
            descricao,
            quantidade,
            personagemId,
        });

        return res.json(inventario);
    }
}

export { UpdateInventarioController };