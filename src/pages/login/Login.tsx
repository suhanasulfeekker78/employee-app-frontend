// import Input from "../../components/input/Input";
import "./Login.css";
import KeyvalueLogo from "../../assets/keyvalue.png" 
import LoginGraphics from "../../assets/login_graphics.png"
import { useState } from "react";
import { Link } from "react-router";

function Login() {
  const [email,setEmail]=useState("")
  const [pw,setPassword]=useState("")
  const emailError=email && !email.includes('@')?"Email must contain @" : null;
  const pswdError= (pw && pw.length <8 )? "Password must be 8 letters": null;
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
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
            <form onSubmit={handleSubmit}>
              {/* <Input type="text" id="username" placeholder="" name="username" label="Username" labelClass="username-label"/>
                <Input type="password" id="password" name="password" placeholder="Password"/> */}
              <div>
                  <label htmlFor="username" className="username-label">Username</label>
                  <input type="text" id="username" className="input-box" name="username" value={email} 
                  onChange={(e)=>setEmail(e.target.value)}/>
                  {emailError && <p className="error">{emailError}</p>}
              </div>
              <div>
                  <input type="password" id="password" name="password" className="input-box" placeholder="Password" 
                  value={pw} onChange={(e)=>setPassword(e.target.value)}/>
                  {pswdError && <p className="error">{pswdError}</p>}
              </div>
              <Link to="/dashboard">
                <input
                type="submit"
                value="Login"
                className="login-button"
              ></input>
              </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
