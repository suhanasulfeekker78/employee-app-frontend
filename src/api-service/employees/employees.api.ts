import employeeBaseApi from "../api";
import type { Employee , DetailedEmployee, BackendDetailedEmployee} from "./types";

export const employeeApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "/employee",
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
          joiningDate: response.joiningDate ? response.joiningDate.split("T")[0] : "",
          role: response.role,
          status: response.status,
          experience: response.experience ? response.experience: "",
          line1: primaryAddress?.line1,
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