// import Input from "../../components/input/Input";
import "./Login.css";
import KeyvalueLogo from "@assets/keyvalue.png" 
import LoginGraphics from "@assets/login_graphics.png"
import { useState} from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "@api-service/auth/login.api";
import Input from "@components/input/Input";

function Login() {
  const [login,{isLoading}] = useLoginMutation();
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const [email,setEmail]=useState("")
  const [pw,setPassword]=useState("")
  const emailError=email && !email.includes('@')?"Email must contain @" : null;
  const pswdError= (pw && pw.length <7 )? "Password must be 7 letters": null;
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!emailError && !pswdError) {
        login({ username: email, password: pw })
          .unwrap()
          .then((response) => {
            localStorage.setItem("token", response.access_token);
            localStorage.setItem("refresh_token", response.refresh_token);
            navigate("/dashboard");
          })
          .catch((error) => {
            setError(error.data.message);
          });
      }
  };

  return (
    <>
      <main className="login-main">
        <section className="left-main-box">
          <div className="left-inner-box">
            <img
              src={LoginGraphics}
              alt="Employees graphics"
              className="login-graphics"
            ></img>
          </div>
        </section>
        <section className="right-main-box">
          <div className="right-inner-box">
            <div>
              <img
                src={KeyvalueLogo}
                alt="KeyValue Logo"
                className="company-logo"
              ></img>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <Input
                type="text"
                id="username"
                name="username"
                label="Username"
                labelClass="username-label"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired={true}
              />
              {emailError && <p className="error">{emailError}</p>}

              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={pw}
                onChange={(e) => setPassword(e.target.value)}
                isRequired={true}
              />
              {pswdError && <p className="error">{pswdError}</p>}
              <input
                type="submit"
                value="Login"
                className="login-button"
                disabled={isLoading}
              />
            </form>
            <span className="login-error-message">{error}</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;

