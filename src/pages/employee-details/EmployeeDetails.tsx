import "./EmployeeDetails.css";
import Layout from "../../components/layout/Layout";
import EditIcon from "../../assets/edit_button.png";

function EmployeeDetails() {
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
              <div className="data-group">
                <span className="data-label">Employee Name</span>
                <span className="data-value">Vishal M</span>
              </div>
              
              <div className="data-group">
                <span className="data-label">Joining Date</span>
                <span className="data-value">12.04.2021</span>
              </div>
              
              <div className="data-group">
                <span className="data-label">Experience</span>
                <span className="data-value">2 Yrs</span>
              </div>
              
              <div className="data-group">
                <span className="data-label">Role</span>
                <span className="data-value">Full Stack</span>
              </div>

              <div className="data-group">
                <span className="data-label">Status</span>
                <span className="status-badge probation">Probation</span>
              </div>
              
              <div className="data-group">
                <span className="data-label">Experience</span>
                <span className="data-value">5 Years</span>
              </div>

            </div>

            <div className="detail-row row-two">

              <div className="data-group address-group">
                <span className="data-label">Address</span>
                <p className="data-address">
                  No:C-9, T.V.K Industrial<br />
                  Estate, Kerala 600032
                </p>
              </div>

              <div className="data-group">
                <span className="data-label">Employee ID</span>
                <span className="data-value">E34656767</span>
              </div>
            </div>

          </div>

        </div>
      </Layout>
    </>
  );
}

export default EmployeeDetails;