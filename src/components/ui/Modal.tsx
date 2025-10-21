/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Modal.css"

import { type ReactNode } from "react";

type ModalProps = {
    children: ReactNode;
    isOpen : boolean; //does the model open
    onClose?: () => void;//to close the model
    title?: string;

};

export default function Modal({children,isOpen ,onClose,title}: ModalProps){
  if(!isOpen) return null;

  return(
    <div className="modal-overlay" onClick={() => onClose?.()} role = "button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClose?.()}>
        <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}  
        >
            {title && <h2 className="modal-title">{title}</h2>}
            <div  className="modal-body">{children}</div>
            <div className="modal-footer">
                <button className="modal-close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  ); 
}