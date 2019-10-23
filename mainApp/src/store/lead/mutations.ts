import { MutationTree } from 'vuex';
import { LeadState } from './types';

export const mutations: MutationTree<LeadState> = {
    setMdid(state, id: string) {
        state.id = id;
    },
};
