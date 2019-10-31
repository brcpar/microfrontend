import { LeadState } from './types';
import { Module } from 'vuex';
import { RootState } from '..';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';

export const state: LeadState = {
    sortedLeads: [],
    leads: [],
    selectedLead: {
        id: '',
        firstName: '',
        lastName: '',
        leadType: '',
        registeredDate: '',
        phoneNumber: '',
        email: '',
    },
};

const namespaced: boolean = true;

export const lead: Module<LeadState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export const sortedLeads: Module<LeadState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
