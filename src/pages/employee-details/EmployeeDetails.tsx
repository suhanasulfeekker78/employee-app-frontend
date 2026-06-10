import "./EmployeeDetails.css";
import EditIcon from "../../assets/edit_button.png";
import DetailGroup from "../../components/detailgroup/DetailGroup";
import { useParams, useNavigate} from "react-router";
import FileIcon from "../../assets/small-file-icon.png"
import { useGetEmployeeByIdQuery } from "../../api-service/employees/employees.api";

function EmployeeDetails() {
  const {id}=useParams();
  const navigate=useNavigate();
  const { data, isLoading } = useGetEmployeeByIdQuery(id as string);
  if (isLoading) {
    return <div className="loading-container">Loading employee details...</div>;
  }
  if (!data) {
    return <div className="error-container">Employee not found.</div>;
  }
  const idProof = data?.idProof;
  const addressParts = [
    data.line1,
    data.city,
    data.country,
    data.postalCode,
  ];

  const address = addressParts.filter(Boolean).join(", ");
  const handleEditClick = () => {
    navigate(`/create?id=${data.id}`);
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
            <DetailGroup label="Employee Name" value={data.name} />
            <DetailGroup label="Joining Date" value={data.joiningDate} />
            <DetailGroup label="Experience" value={data.experience} />
            <DetailGroup label="Role" value={data.role} />

            <div className="data-group">
              <span className="data-label">Status</span>
              <span className={`status-badge ${data.status.toLowerCase()}`}>
                {data.status}
              </span>
            </div>

            <DetailGroup label="Experience" value={data.experience} />
          </div>

          <div className="detail-row row-two">
            <DetailGroup
              label="Address"
              value={address}
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
            <DetailGroup label="Email ID" value={data.email} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;