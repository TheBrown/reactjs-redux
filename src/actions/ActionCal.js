export const INCREASE_NUMBER = 'push_number';
export const DROP_NUMBER = 'drop_number';

export function increaseNumber() {
    return {
        type: INCREASE_NUMBER
    }
}

export function dropNumber() {
    return {
        type: DROP_NUMBER
    }
}