import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className={styles.Overlay}>
          <div className={styles.Container}>
            <div className={styles.Encabezado}>
              <h3>TITULO</h3>
            </div>
            <div onClick={() => setModal(!modal)} className={styles.Btn}>
              x
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
