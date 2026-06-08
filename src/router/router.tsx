import { createBrowserRouter } from "react-router";
import Login from "../pages/login/Login";
import Layout from "../components/layout/Layout"
import NotFound from "../pages/NotFound";
import ErrorHandler from "../pages/ErrorHandler"
import ProtectedRoute from "../pages/ProtectedRoute";
import React, { Suspense } from "react";
import LoadingFallback from "../components/loading/LoadingFallback";
import ErrorBoundary from "../components/ErrorBoundary";

const EmployeeDetails = React.lazy(()=>import("../pages/employee-details/EmployeeDetails"));
const CreateEmployee = React.lazy(()=>import("../pages/create-employee/CreateEmployee"));
const EmployeeList = React.lazy(()=>import("../pages/employee-list/EmployeeList"))

const Router = createBrowserRouter([
  {
    path: "/",
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
        ],
      },
    ],
    errorElement: <ErrorHandler />,
  },
  {
    path: "/details/:id",
    element: <Layout />,
    children: [
      { index: true, element: <ErrorBoundary><Suspense fallback={<LoadingFallback/>}><EmployeeDetails /></Suspense></ErrorBoundary> }
    ],
  },
  {
    path: "/create",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <CreateEmployee /> },
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