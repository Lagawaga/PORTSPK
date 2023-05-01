import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setPost, text }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setPost(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Secure Mindset</h5>
          </div>

          <div className={styles.modalContent}> {text}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}></div>
          </div>
        </div>
        <div className="buttons-container">
          <button className="button-arounder" onClick={() => setPost(false)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
