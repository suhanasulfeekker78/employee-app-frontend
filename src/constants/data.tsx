// export type EmployeeRole = "Developer" | "QA" | "Manager";
// export type EmployeeStatus = "Active" | "Probation" | "Inactive";

export interface Employee {
  id: number;           
  employeeId: string;    
  name: string;
  joiningDate: string;  
  role: string;
  status: string;
  experience: string;
  address: string;
  city?: string;
  country?: string;
  postalCode?:string;
  idProof?: string;     
}

const employees: Employee[] = [
  { 
    id: 1,
    employeeId: "EMP-2021-01",
    name: "Vishal M", 
    joiningDate: "2021-04-12", 
    role: "Manager", 
    status: "Probation", 
    experience: "5 Years",
    address: "123 Main St, Kochi, Kerala, India",
    idProof: "www.google.com"
  },
  { 
    id: 2,
    employeeId: "EMP-2021-02",
    name: "Susan Kurian", 
    joiningDate: "2021-04-12", 
    role: "Developer", 
    status: "Probation", 
    experience: "7 Years",
    address: "456 MG Road, Bangalore, Karnataka, India"
  },
  { 
    id: 3,
    employeeId: "EMP-2021-03",
    name: "Yugesh", 
    joiningDate: "2021-04-12", 
    role: "Manager", 
    status: "Active", 
    experience: "6 Years",
    address: "789 Hitech City, Hyderabad, Telangana, India"
  },
  { 
    id: 4,
    employeeId: "EMP-2021-04",
    name: "Midhun", 
    joiningDate: "2021-04-12", 
    role: "QA", 
    status: "Active", 
    experience: "5 Years",
    address: "321 Panampilly Nagar, Kochi, Kerala, India"
  },
  { 
    id: 5,
    employeeId: "EMP-2021-05",
    name: "Abhijith", 
    joiningDate: "2021-04-12", 
    role: "Developer", 
    status: "Inactive", 
    experience: "7 Years",
    address: "654 Marine Drive, Mumbai, Maharashtra, India"
  },
];

export default employees;