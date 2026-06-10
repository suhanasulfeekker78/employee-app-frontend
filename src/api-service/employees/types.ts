export interface Employee {
  id: number;           
  email: string;    
  name: string;
  joiningDate: string;  
  role: string;
  status: string;
  experience: string;
}

export interface Address {
  line1: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface BackendDetailedEmployee {
  id: number;
  name: string;
  email: string;
  age: number;
  joiningDate: string;
  experience: string;
  status: string;
  role: string;
  created_at: string;
  updated_at: string; 
  addresses: Address[];
  departments: Department[];
}

export interface DetailedEmployee{
    id: number;           
    email: string;    
    name: string;
    joiningDate: string;  
    role: string;
    status: string;
    experience: string;
    line1?: string;
    city?: string;
    country?: string;
    postalCode?:string;
    idProof?: string | undefined;
    password: string;
}