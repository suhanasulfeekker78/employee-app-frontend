export type EmployeeRole = "Full Stack" | "UI Engineer" | "DevOps" | "QA Engineer" | "Project Manager";
export type EmployeeStatus = "Active" | "Probation" | "Inactive";

export interface Employee {
  id: string;           
  employeeId: string;    
  name: string;
  joiningDate: string;  
  role: EmployeeRole;
  status: EmployeeStatus;
  experience: string;
  address: string;
  company: string;       
}

const employees: readonly Employee[] = [
  { 
    id: "1",
    employeeId: "EMP-2021-01",
    name: "Vishal M", 
    company: "Lazada", 
    joiningDate: "2021-04-12", 
    role: "Full Stack", 
    status: "Probation", 
    experience: "5 Years",
    address: "123 Main St, Kochi, Kerala, India"
  },
  { 
    id: "2",
    employeeId: "EMP-2021-02",
    name: "Susan Kurian", 
    company: "XYZ", 
    joiningDate: "2021-04-12", 
    role: "UI Engineer", 
    status: "Probation", 
    experience: "7 Years",
    address: "456 MG Road, Bangalore, Karnataka, India"
  },
  { 
    id: "3",
    employeeId: "EMP-2021-03",
    name: "Yugesh", 
    company: "XYZ", 
    joiningDate: "2021-04-12", 
    role: "DevOps", 
    status: "Active", 
    experience: "6 Years",
    address: "789 Hitech City, Hyderabad, Telangana, India"
  },
  { 
    id: "4",
    employeeId: "EMP-2021-04",
    name: "Midhun", 
    company: "Lazada", 
    joiningDate: "2021-04-12", 
    role: "Full Stack", 
    status: "Active", 
    experience: "5 Years",
    address: "321 Panampilly Nagar, Kochi, Kerala, India"
  },
  { 
    id: "5",
    employeeId: "EMP-2021-05",
    name: "Abhijith", 
    company: "XYZ", 
    joiningDate: "2021-04-12", 
    role: "UI Engineer", 
    status: "Inactive", 
    experience: "7 Years",
    address: "654 Marine Drive, Mumbai, Maharashtra, India"
  },
] as const;

export default employees;