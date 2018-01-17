const flatten = (list: any) => list.reduce(
    (a: any, b: any) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);