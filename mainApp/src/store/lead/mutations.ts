import { MutationTree } from 'vuex';
import { LeadState, Lead } from './types';

export const mutations: MutationTree<LeadState> = {
    setLeads(state, leads: Lead[]) {
        state.leads = leads;
    },
};
