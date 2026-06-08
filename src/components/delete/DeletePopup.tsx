import "./DeletePopup.css"

interface DeletePopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({ onConfirm, onCancel })=>{
    return(
        <>
            <div className="delete-popup-container">
                <div className="delete-text-frame">
                    <span className="delete-big-text">Are you sure?</span>
                    <span className="delete-small-text">Do you realy want to delete employee?</span>
                </div>
                <div className="delete-button-group">
                    <button className="delete-cancel-button" onClick={onCancel}>
                    Cancel
                    </button>
                    <button className="delete-confirm-button" onClick={onConfirm}>
                    Confirm
                    </button>
                </div>
            </div>
        </>
    )

}

export default DeletePopup