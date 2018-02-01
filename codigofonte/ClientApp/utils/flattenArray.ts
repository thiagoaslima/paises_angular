export const flattenArray = (list: any) => list.reduce(
    (a: any, b: any) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []
);