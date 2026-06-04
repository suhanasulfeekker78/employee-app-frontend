import "./EmployeeDetails.css";
import Layout from "../../components/layout/Layout";
import EditIcon from "../../assets/edit_button.png";
import DetailGroup from "../../components/detailgroup/DetailGroup";

function EmployeeDetails() {
  const mockEmployeeData = {
    name: "Vishal M",
    joiningDate: "12.04.2021",
    experience: "2 Yrs",
    role: "Full Stack",
    status: "Probation",
    address: "No:C-9, T.V.K Industrial\nEstate, Kerala 600032",
    employeeId: "E34656767",
  };
  return (
    <>
      <Layout>
        <div className="details-page-container">
          
          <div className="page-header-row">
            <h1 className="page-title">Employee details</h1>
            <button className="edit-details-btn">
              <img src={EditIcon} alt="Edit Icon" />
              <span>Edit details</span>
            </button>
          </div>

          <div className="details-card">
            
            <div className="detail-row row-one">
              <DetailGroup label="Employee Name" value={mockEmployeeData.name}/>
              <DetailGroup label="Joining Date" value={mockEmployeeData.joiningDate}/>
              <DetailGroup label="Experience" value={mockEmployeeData.experience}/>
              <DetailGroup label="Role" value={mockEmployeeData.role}/>

              <div className="data-group">
                <span className="data-label">Status</span>
                <span className="status-badge probation">Probation</span>
              </div>

              <DetailGroup label="Experience" value={mockEmployeeData.experience}/>
            </div>

            <div className="detail-row row-two">
              <DetailGroup label="Address" value={mockEmployeeData.address} isAddress={true} />
              <DetailGroup label="Employee ID" value={mockEmployeeData.employeeId}/>
            </div>

          </div>

        </div>
      </Layout>
    </>
  );
}

export default EmployeeDetails;