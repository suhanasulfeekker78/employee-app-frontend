import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee } from "../../constants/data";
import employees from "../../constants/data";

interface EmployeeState{
    employees: Employee[];
}

const initialState: EmployeeState = {
  employees: employees,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      action.payload.id=6;
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer;