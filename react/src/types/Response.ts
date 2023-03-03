export type Meta = {
    total: number;
    petPage: number;
    currentPage: number;
    lastPage: number;
    firstPage: number;
    firstPageUrl: string;
    lastPageUrl: string;
    nextPageUrl: string | null;
    previousPageUrl: string | null;
}

export type ResponseWithPaginate<T> = {
    meta: Meta
    data: T;
}