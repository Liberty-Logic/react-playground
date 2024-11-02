export function range(start: number, end: number): number[] {
    if (start >= end) {
        throw new Error("start must be before end");
    }

    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
