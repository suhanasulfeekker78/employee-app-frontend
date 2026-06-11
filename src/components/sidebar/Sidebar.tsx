import "./Sidebar.css";
import EmployeeListIcon from "@assets/employee_list_icon.png";

const Sidebar=()=>{
  return (
    <>
      <aside className="sidebar">
        <nav>
          <ul>
            <li className="sidebar-navigation-menu">
              <img
                src={EmployeeListIcon}
                alt="Employee List Icon"
                className="employee-list-icon"
              ></img>
              <span>Employee List</span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
