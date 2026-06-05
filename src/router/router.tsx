import { createBrowserRouter } from "react-router";
import EmployeeList from "../pages/employee-list/EmployeeList";
import CreateEmployee from "../pages/create-employee/CreateEmployee";
import EmployeeDetails from "../pages/employee-details/EmployeeDetails";
import Login from "../pages/login/Login";
import Layout from "../components/layout/Layout"
import NotFound from "../pages/NotFound";
import ErrorHandler from "../pages/ErrorHandler"
import ProtectedRoute from "../pages/ProtectedRoute";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <EmployeeList /> },
          { path: "create", element: <CreateEmployee /> },
          { path: "details/:id", element: <EmployeeDetails /> },
        ],
      },
    ],
    errorElement: <ErrorHandler />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router