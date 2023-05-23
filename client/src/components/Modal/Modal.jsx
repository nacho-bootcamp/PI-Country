import React from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Container}>
        <div className={styles.Encabezado}>
          <h3>TITULO</h3>
        </div>
        <div className={styles.Btn}></div>
      </div>
    </div>
  );
};

export default Modal;
