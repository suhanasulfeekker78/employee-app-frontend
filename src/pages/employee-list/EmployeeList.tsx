import "./EmployeeList.css"
import HelpIcon from "../../assets/help_desk_icon.png"
import CreateIcon from "../../assets/create_icon.png"
import EmployeeRow from "../../components/employee-row/EmployeeRow";
import employees from "../../constants/data"

function EmployeeList() {
  interface TableColumn {
    title: string;
    class: string;
  }
  const tableHeaders: TableColumn[] = [
  { title: "Employee Name", class: "col col1" },
  { title: "Employee ID",   class: "col col2" },
  { title: "Joining Date",  class: "col col3" },
  { title: "Role",          class: "col col4" },
  { title: "Status",        class: "col col5" },
  { title: "Experience",    class: "col col6" },
  { title: "Action",        class: "col col7" }
];

  const handleEdit = (id: string) => {
    console.log("Edit employee with ID:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete employee with ID:", id);
  };
  return (
    <>
      <section className="employee-list-main-container">
        <div className="header-row">
          <h1>Employee List</h1>
          <div className="header-right-group">
            <div className="filter-group">
              <span>Filter By</span>
              <div>
                <select className="custom-status-select" defaultValue="default">
                  <option value="default">Status</option>
                  <option value="probation">Probation</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button className="create-employee-group">
              <img src={CreateIcon} alt="create-icon" />
              <span>Create Employee</span>
            </button>
          </div>
        </div>
        <div className="employee-table">
          <div className="table-header">
            {tableHeaders.map((column) => (
              <div className={column.class}><h2>{column.title}</h2></div>
            ))}
          </div>
          <div className="table-body">
            {employees.map((employee) => (
              <EmployeeRow
                employee={employee}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="help-desk-icon">
        <img src={HelpIcon} alt="help-desk" />
      </div>
    </>
  );
}

export default EmployeeList;