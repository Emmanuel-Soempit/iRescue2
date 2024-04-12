import React from "react";
import Modal from "react-overlays/Modal";
import promptIntervention from "../assets/images/promptIntervention.svg";
export default function MyModal({ showModal, body, setShowModal }) {
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSuccess = () => {
    console.log("success");
  };

  return (
    <>
      {showModal && (
        <div className="modal-example">
          <Modal
            className={`modal ${showModal ? "show" : ""}`}
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
          >
            <div className="modalContent">
              <div className="modalLeft">
                <img src={promptIntervention} alt="" />
              </div>
              <div className="modal-desc">{body}</div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
