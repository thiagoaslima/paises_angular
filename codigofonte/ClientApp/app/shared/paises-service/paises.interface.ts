export interface Configuration {
    title?: string;
    queries: Query[];
    view?: {
        component: string
    }
}

export interface Query {
    scope: QueryScope;
    details: any
}

export interface QueryScope {
    service: string;
    id?: string | number;
    name?: string
}