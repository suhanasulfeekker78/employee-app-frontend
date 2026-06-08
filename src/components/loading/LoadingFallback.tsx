import "../../pages/employee-details/EmployeeDetails.css"; 
import "./LoadingFallback.css"

function LoadingFallback() {
  return (
    <div className="details-page-container skeleton-loading">
      <div className="page-header-row">
        <div className="skeleton title-skeleton"></div>
        <div className="skeleton button-skeleton"></div>
      </div>

      <div className="details-card">
        <div className="detail-row row-one">
          <div className="skeleton field-skeleton"></div>
          <div className="skeleton field-skeleton"></div>
          <div className="skeleton field-skeleton"></div>
          <div className="skeleton field-skeleton"></div>
        </div>
        <div className="detail-row row-two">
          <div className="skeleton address-skeleton"></div>
          <div className="skeleton field-skeleton"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingFallback;