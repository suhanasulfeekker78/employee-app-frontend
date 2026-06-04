import "./Layout.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import type { ReactNode } from "react";
const Layout = ({children}: {children:ReactNode}) => {
  return (
    <>
        <Header/>
        <main className="main-container">
          <Sidebar/>
          {children}
        </main>
    </>
  );
};

export default Layout;
