export class DiceService {
    static rollDice(type: number, quantity: number): number[] {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            result.push(Math.floor(Math.random() * type) + 1);
        }
        return result;
    }
}
