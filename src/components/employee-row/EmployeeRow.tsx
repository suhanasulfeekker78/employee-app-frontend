import React from "react";
import DeleteIcon from "../../assets/delete_icon.png"; 
import EditIcon from "../../assets/edit_icon.png"; 
import "./EmployeeRow.css"
import { useNavigate } from "react-router";

interface Employee {
  name: string;
  id: string;
  joiningDate: string;
  role: string;
  status: "Probation" | "Active" | "Inactive";
  experience: string;
}

interface EmployeeRowProps {
  employee: Employee;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee, onEdit, onDelete }) => {
  const navigate=useNavigate();
  const statusClassName = `el-status-badge ${employee.status.toLowerCase()}`;

  const handleClick=()=>{
    navigate(`/details/${employee.id}`)
  }

  return (
    <div className="employee-row" onClick={handleClick}>
      <div className="cell cell-name">{employee.name}</div>
      <div className="cell cell-id">{employee.id}</div>
      <div className="cell cell-date">{employee.joiningDate}</div>
      <div className="cell cell-role">{employee.role}</div>
      <div className="cell cell-status">
        <span className={statusClassName}>{employee.status}</span>
      </div>
      <div className="cell cell-experience">{employee.experience}</div>
      <div className="cell cell-action">
        <div className="button-group1">
          <button className="delete-btn" onClick={(e) =>{e.stopPropagation(); onDelete(employee.id)}}>
            <img src={DeleteIcon} alt="Delete" />
          </button>
          <button className="edit-btn" onClick={(e) => {e.stopPropagation(); onEdit(employee.id)}}>
            <img src={EditIcon} alt="Edit" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRow;