import { ActionTree } from 'vuex';
import { LeadState, Lead } from './types';
import { RootState } from '..';

export const actions: ActionTree<LeadState, RootState> = {
    getLeads({commit}) {
        const mockLeads: Lead[] = [
            {
                id: 'abc',
                firstName: 'Test',
                lastName: 'One',
            },
            {
                id: 'def',
                firstName: 'Test',
                lastName: 'Two',
            },
            {
                id: 'ghi',
                firstName: 'Test',
                lastName: 'Three',
            },
        ];
        commit('setLeads', mockLeads);
    },
};
