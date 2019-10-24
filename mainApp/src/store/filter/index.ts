import { FilterState } from './types';
import { Module } from 'vuex';
import { RootState } from '..';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';

export const state: FilterState = {
    filters: [],
};

const namespaced: boolean = true;

export const filter: Module<FilterState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
