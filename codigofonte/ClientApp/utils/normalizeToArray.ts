export function normalizeToArray<T>(value: T | T[]) {
    return Array.isArray(value) ? value : [value];
}