import Input from "../../components/input/Input";
import "./Login.css";
import KeyvalueLogo from "../../assets/keyvalue.png" 
import LoginGraphics from "../../assets/login_graphics.png"

function Login() {
  return (
    <>
        <main>
          <section className="left-main-box">
            <div className="left-inner-box">
              <img
                src={LoginGraphics} alt="Employees graphics" className="login-graphics"
              ></img>
            </div>
          </section>
          <section className="right-main-box">
            <div className="right-inner-box">
              <div>
                <img
                  src={KeyvalueLogo} alt="KeyValue Logo" className="company-logo"
                ></img>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input type="text" id="username" placeholder="" name="username" label="Username" labelClass="username-label"/>
                <Input type="password" id="password" name="password" placeholder="Password"/>
                <input
                  type="submit"
                  value="Login"
                  className="login-button"
                ></input>
              </form>
            </div>
          </section>
        </main>
    </>
  );
}

export default Login;
