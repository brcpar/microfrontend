export interface LeadState {
    leads: Lead[];
}

export interface Lead {
    id: string;
    firstName: string;
    lastName: string;
    leadType: string;
    registeredDate: string;
}
