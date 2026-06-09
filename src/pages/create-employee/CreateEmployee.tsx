import "./CreateEmployee.css";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import AttachVector from "../../assets/attach_files_vector.png";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import employees, { type Employee } from "../../constants/data";
import UploadModal from "../../components/upload/UploadModal";
import { addEmployee} from "../../store/employee/employeeReducer";
import { useAppDispatch } from "../../store/store";

function CreateEmployee() {
  const roleOptions = [
    { value: "Developer", label: "Developer" },
    { value: "QA", label: "QA" },
    { value: "Manager", label: "Manager" }
  ];

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    {value: "Probation", label: "Probation"}
  ];

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const employeeIdFromUrl = searchParams.get("id");
  
  const editableEmployee = employeeIdFromUrl 
    ? employees.find(emp => emp.id == Number(employeeIdFromUrl)) 
    : null;
    
  const isEditing = !!editableEmployee;

  const [formData, setFormData] = useState <Employee>({
    id: editableEmployee?.id || 0,
    name: editableEmployee?.name || "",
    employeeId: editableEmployee?.employeeId || "",
    joiningDate: editableEmployee?.joiningDate || "",
    role: editableEmployee?.role?.toLowerCase() || "",
    status: editableEmployee?.status?.toLowerCase() || "",
    experience: editableEmployee?.experience || "",
    address: editableEmployee?.address || "",
    city: editableEmployee?.city || "",
    country: editableEmployee?.country|| "",
    postalCode: editableEmployee?.postalCode|| "",
    idProof: editableEmployee?.idProof||""
  });

  const [dateType, setDateType] = useState<"text" | "date">(
    editableEmployee?.joiningDate ? "date" : "text"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState <File|string|undefined>(editableEmployee?.idProof ? editableEmployee.idProof : undefined);

  const handleFileUploaded = (file: File) => {
    setUploadedFile(file);
    setIsModalOpen(false);
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setUploadedFile(undefined);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isEditing) {
      console.log("Edited employee data", formData);
    } else {
      dispatch(addEmployee(formData));
      navigate("/dashboard");
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
              name="name"
              placeholder="Employee Name"
              label="Employee Name"
              containerClass="form-group"
              isRequired={true}
              value={formData.name}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              id="employeeID"
              name="employeeId"
              placeholder="Employee ID"
              label="Employee ID"
              containerClass="form-group"
              isRequired={true}
              value={formData.employeeId}
              onChange={handleInputChange}
              disabled={isEditing}
            />

            <div className="form-group">
              <label htmlFor="joinDate">Joining Date</label>
              <input
                type={dateType}
                id="joinDate"
                name="joiningDate"
                placeholder="Joining Date"
                required
                value={formData.joiningDate}
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
              <label>Upload ID Proof</label>
              <div
                className="custom-file-upload"
                onClick={() => !uploadedFile && setIsModalOpen(true)}
              >
                {/* <input type="file" id="IDProof" name="IDProof"></input> */}
                <div className="upload-label">
                  <div className="left-file-chip-group">
                    {uploadedFile && (
                      <div className="file-chip">
                        <span>{typeof uploadedFile === 'string' ? uploadedFile : uploadedFile.name}</span>
                        <button
                          type="button"
                          className="remove-file-btn"
                          onClick={handleRemoveFile}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="right-attach-file-group">
                    <img src={AttachVector} alt="Attach File Icon"></img>
                    <span>Attach files</span>
                  </div>
                </div>
              </div>
            </div>

            {isModalOpen && (
              <div className="upload-overlay">
                <UploadModal
                  onClose={() => setIsModalOpen(false)}
                  onUpload={handleFileUploaded}
                />
              </div>
            )}

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
