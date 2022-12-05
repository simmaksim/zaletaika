import { createPortal } from "react-dom";

import "./Modal.css";

const modalRootElement = document.getElementById("modal");

export function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return createPortal(
    <div className="modal-background" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="close" onClick={onClose}></div>
        {children}
      </div>
    </div>,
    modalRootElement
  );
}