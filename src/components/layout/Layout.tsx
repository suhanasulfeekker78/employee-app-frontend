import "./Layout.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
        <Header/>
        <main className="main-container">
          <Sidebar/>
          {/* {children} */}
          <Outlet/>
        </main>
    </>
  );
};

export default Layout;
