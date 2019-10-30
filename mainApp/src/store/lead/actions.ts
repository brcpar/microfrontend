import { ActionTree } from 'vuex';
import { LeadState, Lead } from './types';
import { RootState } from '..';

export const actions: ActionTree<LeadState, RootState> = {
    sortLeads({commit, state}, sortType) {
        debugger;
        if (state.sortedLeads.length === 0){
            state.sortedLeads = state.leads.sort((a,b)=>{
                //if sortType date do this...
            if (new Date(a.registeredDate) > new Date(b.registeredDate)) {
              return 1
            }
            else {
              return -1
            }
        })
        }
        else{
            state.sortedLeads = state.leads.reverse();
        }
      commit('setLeads', state.sortedLeads);
    },
    setLead({commit}, lead: Lead) {
        commit('setLead', lead);
    },
    setLeadDefault({commit}) {
        commit('setLead', {
            id: '',
            firstName: '',
            lastName: '',
            leadType: '',
            registeredDate: '',
            phoneNumber: '',
            email: ''});
    },
    setLeads({commit}, leads: Lead[]){
        commit('setLeads', leads);
    },
    getLeads({commit}) {
        const mockLeads: Lead[] = [
            {
                id: 'abc',
                firstName: 'Guy',
                lastName: 'One',
                leadType: 'Buyer',
                registeredDate: '',
                phoneNumber: '',
                email: '',
            },
            {
                id: 'def',
                firstName: 'Test',
                lastName: 'Person',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(13)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'ghi',
                firstName: 'Thing',
                lastName: 'Three',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(27)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'jkl',
                firstName: 'Its',
                lastName: 'Over',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(1)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'mno',
                firstName: 'Test',
                lastName: 'Man',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(13)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'pqr',
                firstName: 'This',
                lastName: 'Check',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(27)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'stu',
                firstName: 'Anotha',
                lastName: 'One',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(1)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'vwx',
                firstName: 'Wow',
                lastName: 'Zers',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(13)).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: 'yz0',
                firstName: 'Moar',
                lastName: 'Folks',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: '123',
                firstName: 'How',
                lastName: 'Come',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString().slice(0,3)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(3,6)+'-'+Math.floor(100000000 + Math.random() * 900000000).toString().slice(6,15),
                email: 'my.email@gmail.com',
            },
            {
                id: '456',
                firstName: 'Where',
                lastName: 'Go',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '7891',
                firstName: 'What',
                lastName: 'Do',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: Math.floor(100000000 + Math.random() * 900000000).toString(),
                email: 'my.email@gmail.com',
            },
            {
                id: '781',
                firstName: 'Fake',
                lastName: 'Stuff',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '782',
                firstName: 'Keep',
                lastName: 'Going',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '783',
                firstName: 'Dont',
                lastName: 'Stop',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '784',
                firstName: 'So',
                lastName: 'Close',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '785',
                firstName: 'We',
                lastName: 'Close',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '786',
                firstName: 'Test',
                lastName: 'Three',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '787',
                firstName: 'Why',
                lastName: 'Do',
                leadType: 'Seller',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '788',
                firstName: 'Bruce',
                lastName: 'Parish',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '789',
                firstName: 'Vishal',
                lastName: 'Patel',
                leadType: 'Partial',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '790',
                firstName: 'Bear',
                lastName: 'Rug',
                leadType: 'Buyer',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '791',
                firstName: 'So',
                lastName: 'Many',
                leadType: 'Partial',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
            {
                id: '792',
                firstName: 'Last',
                lastName: 'One',
                leadType: 'Partial',
                registeredDate: new Date(new Date().setDate(Math.floor(Math.random() * 30))).toDateString(),
                phoneNumber: '123-456-7891',
                email: 'my.email@gmail.com',
            },
        ];
        commit('setLeads', mockLeads);
    },
};
