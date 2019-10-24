export interface FilterState {
    filters: Filter[];
}

export interface Filter {
    id: string;
    name: string;
    subFilters?: Filter[];
}
