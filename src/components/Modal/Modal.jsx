import { useEffect } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const modalRootElement = document.getElementById("modal");

export function Modal({ isVisible, onClose, children }) {
  useEffect(() => {
    document.body.setAttribute(
      "style",
      `overflow: ${isVisible ? "hidden" : "auto"}`
    );
  }, [isVisible]);
  
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
