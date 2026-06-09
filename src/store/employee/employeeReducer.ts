import employees from "../../constants/data";
import type { Employee } from "../../constants/data";

export const EMPLOYEE_ACTIONS_TYPES={
    ADD: "employee/ADD",
    DELETE: "employee/DELETE",
    UPDATE: "employee/UPDATE",
} as const;

export const addEmployeeActionCreator = (employee: Employee) =>{
    return{
        type: EMPLOYEE_ACTIONS_TYPES.ADD,
        payload: employee
    };
};

interface EmployeeState{
    employees: Employee[];
}

// type EmployeeAction={
//     type: string ;
//     payload: Employee;
// }

const InitialState: EmployeeState ={
    employees: employees,
}

export const reducer = (
    state: EmployeeState = InitialState,
    action: any,
): EmployeeState => {
    switch (action.type){
        case EMPLOYEE_ACTIONS_TYPES.ADD:{
            const record=action.payload;
            return{...state,employees:[...state.employees, record]};
        }
        default:
            return state ;
    }
}

export default reducer;