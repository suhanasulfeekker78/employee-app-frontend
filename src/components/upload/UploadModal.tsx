import "./UploadModal.css"
import CloseButton from "@assets/close_button.png"
import CloudIcon from "@assets/upload_cloud_symbol.png"
import UploadIcon from "@assets/upload_file_icon.png"

interface UploadModalProps{
    onClose: () => void;
    onUpload: (file: File) => void;
}

const UploadModal: React.FC<UploadModalProps> =({onClose, onUpload})=>{
    // const fileInputRef = useRef<HTMLInputElement>(null);
    // const [stagedFile, setStagedFile] = useState<File | null>(null);
    // const handleUploadClick = () => {
    //   fileInputRef.current?.click();
    // };
    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   if (e.target.files && e.target.files.length > 0) {
    //     setStagedFile(e.target.files[0]);
    //   }
    // };
    // const handleDragOver = (e: React.DragEvent) => {
    //   e.preventDefault();
    // };
    // const handleDrop = (e: React.DragEvent) => {
    //   e.preventDefault();
    //   if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    //     setStagedFile(e.dataTransfer.files[0]);
    //   }
    // };
    // const handleConfirmClick = () => {
    //   if (stagedFile) {
    //     onUpload(stagedFile);
    //   }
    // };
    return(
        <>
            <div className="upload-proof-container">
                <div className="upload-proof-header">
                    <span>Upload Proof</span>
                    <img src={CloseButton} alt="close button" onClick={onClose}/>
                </div>
                <div className="upload-middle-container">
                    <div className="file-drag-drop">
                        <img src={CloudIcon} alt="upload cloud icon"/>
                        <span>Drag and drop excel file here</span>
                    </div>
                    <span className="or-span">Or</span>
                    <div className="upload-file-bottom-group">
                        <img src={UploadIcon} alt="Upload file"/>
                        <span>Upload file</span>
                    </div>
                </div>
                <div className="upload-button-group">
                    <button className="upload-cancel-button" onClick={onClose}>
                    Cancel
                    </button>
                    <button className="upload-confirm-button">
                    Upload
                    </button>
                </div>
            </div>
        </>
    )
}

export default UploadModal;