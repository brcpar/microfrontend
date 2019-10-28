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
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(1)).toDateString(),
            },
            {
                id: 'def',
                firstName: 'Test',
                lastName: 'Two',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(13)).toDateString(),
            },
            {
                id: 'ghi',
                firstName: 'Test',
                lastName: 'Three',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(27)).toDateString(),
            },
        ];
        commit('setLeads', mockLeads);
    },
};
