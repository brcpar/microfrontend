import { ActionTree } from 'vuex';
import { FilterState, Filter } from './types';
import { RootState } from '..';

export const actions: ActionTree<FilterState, RootState> = {
    getFilters({commit}) {
        const mockFilters: Filter[] = [
            {
                id: 'abc',
                name: 'Labels',
            },
            {
                id: 'def',
                name: 'Pipelines',
                subFilters: [
                    {
                        id: 'pipe1',
                        name: 'started',
                    },
                    {
                        id: 'pipe2',
                        name: 'finished',
                    },
                ],
            },
            {
                id: 'ghi',
                name: 'Others',
            },
        ];
        commit('setFilters', mockFilters);
    },
};
