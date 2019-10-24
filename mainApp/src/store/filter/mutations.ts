import { MutationTree } from 'vuex';
import { FilterState, Filter } from './types';

export const mutations: MutationTree<FilterState> = {
    setFilters(state, filters: Filter[]) {
        state.filters = filters;
    },
};
