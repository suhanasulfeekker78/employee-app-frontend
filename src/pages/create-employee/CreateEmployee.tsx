import "./CreateEmployee.css";

import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import AttachVector from "../../assets/attach_files_vector.png";
import { useState } from "react";

function CreateEmployee() {
  const [dateType, setDateType] = useState<"text" | "date">("text");
  const roleOptions = [
    { value: "developer", label: "Developer" },
    { value: "qa", label: "QA" },
    { value: "manager", label: "Manager" }
  ];
  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" }
  ];

  const onSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData)
  }

  return (
    <>
      <section className="content-section">
        <div className="page-title">
          <h1>Create Employee</h1>
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
            />

            <Input
              type="text"
              id="employeeID"
              name="employeeID"
              placeholder="Employee ID"
              label="Employee ID"
              containerClass="form-group"
              isRequired={true}
            />

            <div className="form-group">
              <label htmlFor="joinDate">Joining Date</label>
              <input
                type={dateType}
                id="joinDate"
                name="joinDate"
                placeholder="Joining Date"
                required
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
            />

            <Select
              id="status"
              name="status"
              label="Status"
              placeholder="Status"
              options={statusOptions}
              containerClass="form-group"
              isRequired={true}
            />

            <Input
              type="number"
              id="experience"
              name="experience"
              placeholder="Experience"
              label="Experience"
              containerClass="form-group"
            />

            <div className="form-group address-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              ></input>
              <div className="address-row">
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                ></input>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                ></input>
              </div>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal code"
                className="small-field"
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
                Create
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
