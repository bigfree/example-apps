export type ResponseMeta = {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export type ResponseLinks = {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export type ResponseWithPaginate<T> = {
    items: T;
    meta: ResponseMeta;
    links: ResponseLinks;
}