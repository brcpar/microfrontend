export interface LeadState {
    leads: Lead[];
    selectedLead: Lead;
}

export interface Lead {
    id: string;
    firstName: string;
    lastName: string;
    leadType: string;
    registeredDate: string;
    phoneNumber: string;
    email: string;
}
