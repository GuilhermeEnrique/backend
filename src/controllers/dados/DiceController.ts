import { Request, Response } from 'express';
import { rollDice, DiceType, RollResult } from '../../services/dados/DiceService';

class DiceController {
    public async handleRoll(req: Request, res: Response): Promise<void> {
        const { type, quantity } = req.body;

        if (!type || !quantity) {
            res.status(400).json({ error: "Missing required parameters." });
            return;
        }

        const rolls: number[] = [];
        let sum = 0;

        for (let i = 0; i < quantity; i++) {
            const result = rollDice(type, 1).rolls[0];
            rolls.push(result);
            sum += result;
        }

        res.status(200).json({ rolls, sum });
    }

}

export default new DiceController();
