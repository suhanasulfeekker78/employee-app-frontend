import "./EmployeeList.css"
import HelpIcon from "../../assets/help_desk_icon.png"
import CreateIcon from "../../assets/create_icon.png"
import EmployeeRow from "../../components/employee-row/EmployeeRow";
import { useNavigate } from "react-router";
import { useState } from "react";
import Chatbot from "../../components/chatbot/Chatbot";
import DeletePopup from "../../components/delete/DeletePopup";
import type { Employee } from "../../api-service/employees/types";

import { useGetEmployeesQuery,useDeleteEmployeeMutation } from "../../api-service/employees/employees.api";

function EmployeeList() {
  const {data =[]} = useGetEmployeesQuery();
	
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const [isChatbot,setChatbot]=useState(false);
  const navigate=useNavigate();
  interface TableColumn {
    title: string;
    class: string;
  }
  const tableHeaders: TableColumn[] = [
  { title: "Employee Name", class: "col col1" },
  { title: "Email ID",   class: "col col2" },
  { title: "Joining Date",  class: "col col3" },
  { title: "Role",          class: "col col4" },
  { title: "Status",        class: "col col5" },
  { title: "Experience",    class: "col col6" },
  { title: "Action",        class: "col col7" }
];
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    navigate(`/create?id=${id}`);
  };

  const handleDelete = (id: number) => {
    setSelectedId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    const result = await deleteEmployee(selectedId);
    setIsDeleteOpen(false); 
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
            <button
              className="create-employee-group"
              onClick={() => navigate("/create")}
            >
              <img src={CreateIcon} alt="create-icon" />
              <span>Create Employee</span>
            </button>
          </div>
        </div>
        <div className="employee-table">
          <div className="table-header">
            {tableHeaders.map((column) => (
              <div className={column.class}>
                <h2>{column.title}</h2>
              </div>
            ))}
          </div>
          <div className="table-body">
            {data.map((employee:Employee) => (
              <EmployeeRow
                employee={employee}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </section>
      {isChatbot ? (
        <Chatbot onClose={() => setChatbot(false)} />
      ) : (
        <div className="help-desk-icon" onClick={() => setChatbot(true)}>
          <img src={HelpIcon} alt="help-desk" />
        </div>
      )}
      {isDeleteOpen && (
        <div className="delete-overlay">
          <DeletePopup
            onConfirm={confirmDelete}
            onCancel={() => setIsDeleteOpen(false)}
          />
        </div>
      )}
    </>
  );
}

export default EmployeeList;