export class DiceService {
    private static history: number[][] = [];

    static rollDice(type: number, quantity: number): number[] {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            result.push(Math.floor(Math.random() * type) + 1);
        }
        DiceService.history.push(result);
        return result;
    }
    
    static getHistory(): number[][] {
        return DiceService.history;
    }
}