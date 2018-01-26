import 'jest-preset-angular';
// mocks
const mock = () => {
    let storage: any = {};
    return {
        getItem: (key: string | number) => key in storage ? storage[key] : null,
        setItem: (key: string | number, value: any) => storage[key] = value || '',
        removeItem: (key: string | number) => delete storage[key],
        clear: () => storage = {},
    };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['-webkit-appearance']
});