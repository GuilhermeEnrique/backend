import { Request, Response } from 'express';
import { DiceService } from '../../services/dados/DiceService';

export class DiceController {
    static async handleRoll(req: Request, res: Response): Promise<void> {
        try {
            const { type, quantity } = req.body;
            const result = DiceService.rollDice(parseInt(type.substring(1)), quantity);
            const sum = result.reduce((a, b) => a + b);
            res.status(200).json({ result, sum });
        } catch (err) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
