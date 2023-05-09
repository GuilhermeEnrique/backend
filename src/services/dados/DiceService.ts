export enum DiceType {
    d6 = 6,
    d8 = 8,
    d12 = 12,
    d20 = 20,
}

export interface RollResult {
    rolls: number[];
    total: number;
}

export function rollDice(type: DiceType, quantity: number): RollResult {
    const rolls = [];

    for (let i = 0; i < quantity; i++) {
        rolls.push(Math.ceil(Math.random() * type));
    }

    const total = rolls.reduce((acc, roll) => acc + roll, 0);

    return { rolls, total };
}
