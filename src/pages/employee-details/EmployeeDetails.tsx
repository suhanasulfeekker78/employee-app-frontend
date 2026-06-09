import "./EmployeeDetails.css";
import EditIcon from "../../assets/edit_button.png";
import DetailGroup from "../../components/detailgroup/DetailGroup";
import employees from "../../constants/data";
import { useParams, useNavigate} from "react-router";
import FileIcon from "../../assets/small-file-icon.png"

function EmployeeDetails() {
  const {id}=useParams();
  const navigate=useNavigate();
  const employee=employees.find(employee=>employee.id==id)
  if (!employee) {
    return <div><h2>Employee not found</h2></div>;
  }
  const idProof = employee.idProof;
  const handleEditClick = () => {
    navigate(`/create?id=${employee.id}`);
  };

  return (
    <>
      <div className="details-page-container">
        <div className="page-header-row">
          <h1 className="page-title-1">Employee details</h1>
          <button className="edit-details-btn" onClick={handleEditClick}>
            <img src={EditIcon} alt="Edit Icon" />
            <span>Edit details</span>
          </button>
        </div>

        <div className="details-card">
          <div className="detail-row row-one">
            <DetailGroup label="Employee Name" value={employee.name} />
            <DetailGroup label="Joining Date" value={employee.joiningDate} />
            <DetailGroup label="Experience" value={employee.experience} />
            <DetailGroup label="Role" value={employee.role} />

            <div className="data-group">
              <span className="data-label">Status</span>
              <span className={`status-badge ${employee.status.toLowerCase()}`}>
                {employee.status}
              </span>
            </div>

            <DetailGroup label="Experience" value={employee.experience} />
          </div>

          <div className="detail-row row-two">
            <DetailGroup
              label="Address"
              value={employee.address}
              isAddress={true}
            />
            {idProof && (
              <div className="data-group">
                <span className="data-label">Employee ID Proof</span>
                <div className="view-id-proof-group">
                  <img src={FileIcon} alt="file icon" />
                  <a
                    href={idProof.startsWith('http') ? idProof : `https://${idProof}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                </div>
              </div>
            )}
            <DetailGroup label="Employee ID" value={employee.employeeId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;