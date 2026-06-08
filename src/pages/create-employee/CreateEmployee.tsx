import "./CreateEmployee.css";

import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import AttachVector from "../../assets/attach_files_vector.png";
import { useState } from "react";
import { useSearchParams } from "react-router";
import employees from "../../constants/data"

function CreateEmployee() {
  const [searchParams] = useSearchParams();
  
  const employeeIdFromUrl = searchParams.get("id");
  
  const editableEmployee = employeeIdFromUrl 
    ? employees.find(emp => emp.id == employeeIdFromUrl) 
    : null;
    
  const isEditing = !!editableEmployee;

  const [formData, setFormData] = useState({
    employeeName: editableEmployee?.name || "",
    employeeID: editableEmployee?.employeeId || "",
    joinDate: editableEmployee?.joiningDate || "",
    role: editableEmployee?.role?.toLowerCase() || "",
    status: editableEmployee?.status?.toLowerCase() || "",
    experience: editableEmployee?.experience || "",
    address: editableEmployee?.address || "",
    city: editableEmployee?.city || "",
    country: editableEmployee?.country|| "",
    postalCode: editableEmployee?.postalCode|| ""
  });

  const [dateType, setDateType] = useState<"text" | "date">(
    editableEmployee?.joiningDate ? "date" : "text"
  );

  const roleOptions = [
    { value: "developer", label: "Developer" },
    { value: "qa", label: "QA" },
    { value: "manager", label: "Manager" }
  ];
  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    {value: "probation", label: "Probation"}
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isEditing) {
      console.log("Edited employee data", formData);
    } else {
      console.log("Created new employee", formData);
    }
  };


  return (
    <>
      <section className="content-section">
        <div className="page-title">
          <h1>{isEditing ? "Edit Employee" : "Create Employee"}</h1>
        </div>
        <div className="form-container">
          <form className="employee-form" onSubmit={onSubmit}>
            <Input
              type="text"
              id="employeeName"
              name="employeeName"
              placeholder="Employee Name"
              label="Employee Name"
              containerClass="form-group"
              isRequired={true}
              value={formData.employeeName}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              id="employeeID"
              name="employeeID"
              placeholder="Employee ID"
              label="Employee ID"
              containerClass="form-group"
              isRequired={true}
              value={formData.employeeID}
              onChange={handleInputChange}
              disabled={isEditing}
            />

            <div className="form-group">
              <label htmlFor="joinDate">Joining Date</label>
              <input
                type={dateType}
                id="joinDate"
                name="joinDate"
                placeholder="Joining Date"
                required
                value={formData.joinDate}
                onChange={handleInputChange}
                onFocus={(e) => {
                  setDateType("date");
                  setTimeout(() => e.target.showPicker?.(), 0);
                }}
                onBlur={(e) => {
                  if (!e.target.value) setDateType("text");
                }}
              ></input>
            </div>

            <Select
              id="role"
              name="role"
              label="Role"
              placeholder="Choose Role"
              options={roleOptions}
              containerClass="form-group"
              isRequired={true}
              value={formData.role}
              onChange={handleInputChange}
            />

            <Select
              id="status"
              name="status"
              label="Status"
              placeholder="Status"
              options={statusOptions}
              containerClass="form-group"
              isRequired={true}
              value={formData.status}
              onChange={handleInputChange}
            />

            <Input
              type="number"
              id="experience"
              name="experience"
              placeholder="Experience"
              label="Experience"
              containerClass="form-group"
              value={formData.experience}
              onChange={handleInputChange}
            />

            <div className="form-group address-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              ></input>
              <div className="address-row">
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                ></input>
              </div>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal code"
                className="small-field"
                value={formData.postalCode}
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="IDProof">Upload ID Proof</label>
              <div className="custom-file-upload">
                <input type="file" id="IDProof" name="IDProof"></input>
                <label htmlFor="IDProof" className="upload-label">
                  <img src={AttachVector} alt="Attach File Icon"></img>
                  <span>Attach files</span>
                </label>
              </div>
            </div>

            <div className="button-group">
              <button type="submit" className="create-btn">
                {isEditing ? "Save" : "Create"}
              </button>
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateEmployee;
