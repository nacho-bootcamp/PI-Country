import React from "react";
import styles from "./Modal.module.css";
import delet from "../../assets/img/delete.png";

const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className={styles.Overlay}>
          <div className={styles.Container}>
            <div onClick={() => setModal(!modal)} className={styles.Btn}>
              <img className={styles.img} src={delet} alt="" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
