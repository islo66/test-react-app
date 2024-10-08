export interface Apps {
    appId: string;
    appName: string;
    appSources: string[];
    category: string;
}

export interface Response {
    appRows: Apps[],
    totalCount: number
}