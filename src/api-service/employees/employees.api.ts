import employeeBaseApi from "../api";
import type { Employee , DetailedEmployee, BackendEmployee, BackendDetailedEmployee} from "./types";

export const employeeApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "/employee",
      transformResponse: (response: BackendEmployee[]): Employee[] => {
        return response.map((employee) => ({
          id: employee.id,
          name: employee.name,
          email: employee.email,
          joiningDate: "N/A",
          role: employee.role,
          status: "Active",
          experience: "Not Specified",
        }));
      },
      providesTags: ["Employees"],
    }),
    getEmployeeById: builder.query<DetailedEmployee, string>({
      query: (id) => `/employee/${id}`,
      transformResponse: (
        response: BackendDetailedEmployee,
      ): DetailedEmployee => {
        const primaryAddress = response.addresses?.[0];
        return {
          id: response.id,
          name: response.name,
          email: response.email,
          joiningDate: response.created_at
            ? response.created_at.split("T")[0]
            : "N/A",
          role: response.role || "Developer",
          status: "Active",
          experience: "Not Specified",
          line1: primaryAddress?.line1 || "No Address Provided",
          city: primaryAddress?.city,
          country: primaryAddress?.country,
          postalCode: primaryAddress?.postal_code,
          idProof: undefined,
          password: "",
        };
      },
    }),
    createEmployee: builder.mutation({
      query: (payload) => ({
        url: "/employee",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Employees"],
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/employee/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Employees']
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Employees']
    })
  }),
});

export const {
    useGetEmployeesQuery, 
    useGetEmployeeByIdQuery, 
    useCreateEmployeeMutation, 
    useUpdateEmployeeMutation, 
    useDeleteEmployeeMutation} = employeeApi;