import "./Header.css";
import KeyvalueLogo from "@assets/keyvalue.png"

const Header = () => {
  return (
    <>
      <header className="main-header">
        <img
          src={KeyvalueLogo}
          alt="Keyvalue Logo"
          className="company-logo"
        ></img>
      </header>
    </>
  );
};

export default Header;
