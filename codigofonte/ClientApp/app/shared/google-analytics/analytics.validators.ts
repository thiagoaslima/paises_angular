import { AnalyticsKey } from './analytics.definitions';

export const isAnalyticsKey = (str: string): AnalyticsKey => {
    const [prefix, code, verifier] = str.split('-');
    const err = new Error('Invalid keycode!');

    if (!prefix || !code || !verifier) {
        throw err;
    }

    if (prefix !== 'UA') {
        throw err;
    }

    if (code.length !== 6 || isNaN(Number(code))) {
        throw err;
    }

    if (verifier.length !== 1 || isNaN(Number(verifier))) {
        throw err;
    }

    return str;
};
