import { configureStore } from "@reduxjs/toolkit";
import { render ,screen, waitFor} from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Login from "@pages/login/Login";

// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock the store
const mockStore = configureStore({
  reducer: {
    employee: (state = { employees: [] }) => state,
    department: (state = { departments: [] }) => state,
    employeeApi: (state = {}) => state,
  },
});

// Mock the login mutation
const mockLoginMutation = vi.fn();
vi.mock("../../api-service/auth/login.api", () => ({
  useLoginMutation: () => [
    () => ({
      unwrap: () => mockLoginMutation(),
    }),
    { isLoading: false },
  ],
}));

describe("Login Page", ()=>{
    const renderLogin=()=>{
        return render(
            <Login/>
        );
    };

    beforeEach(()=>{
        vi.clearAllMocks();
    });

    it("Match snapshot", ()=>{
        const {container}= renderLogin();
        expect(container).toMatchSnapshot();
    });
    it("input elements and login button is present", ()=>{
        renderLogin();
        const passwordInput=screen.getByPlaceholderText("Password");
        const usernameInput=screen.getByLabelText("Username");
        const loginButton=screen.getByDisplayValue("Login");
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });
    it("username must contain @", async ()=>{
        renderLogin();
        const usernameInput=screen.getByLabelText("Username");
        await UserEvent.type(usernameInput,"testexample.com");
        const emailError=screen.getByText("Email must contain @");
        expect(emailError).toBeVisible();
    });
    it("Password must contain 7 digits", async ()=>{
        renderLogin();
        const passwordInput=screen.getByPlaceholderText("Password");
        await UserEvent.type(passwordInput,"123456");
        const pswdError=screen.getByText("Password must be 7 letters");
        expect(pswdError).toBeVisible();
    });
    it("Should handle successfull login", async ()=>{
        mockLoginMutation.mockResolvedValueOnce({access_token:"fake-token",refresh_token:"fake-token",token_type:"bearer"});
        renderLogin();
        const passwordInput=screen.getByPlaceholderText("Password");
        const usernameInput=screen.getByLabelText("Username");
        const loginButton=screen.getByDisplayValue("Login");

        await UserEvent.type(usernameInput,"text@example.com");
        await UserEvent.type(passwordInput,"password123");

        await UserEvent.click(loginButton);

        await waitFor(()=>{
            expect(mockLoginMutation).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
        });
    });
    it("Should handle login failure", async () => {
      renderLogin();
      const errorMessage = "Invalid credentials";
      mockLoginMutation.mockRejectedValueOnce({
        data: { message: errorMessage },
      });
      const passwordInput = screen.getByPlaceholderText("Password");
      const usernameInput = screen.getByLabelText("Username");
      const loginButton = screen.getByDisplayValue("Login");
      await UserEvent.type(usernameInput, "wrong@example.com");
      await UserEvent.type(passwordInput, "wrongpassword");
      await UserEvent.click(loginButton);
      await waitFor(() => {
        expect(mockLoginMutation).toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
        const errorAlert = screen.getByText(errorMessage);
        expect(errorAlert).toBeVisible();
      });
    });
});