export function getProperty(keyPath: string, item: any): any {
    const propertiesArray = keyPath.split('.');

    return propertiesArray.reduce((val, key) => {

        if (!Object.prototype.hasOwnProperty.call(val, key)) {
            const errorMessage = `O objeto consultado não possui a propriedade "${key}". [path: ${keyPath}, elemento: ${JSON.stringify(item)}]`;
            throw new TypeError(errorMessage);
        }

        return val[key];
    }, item);
}
