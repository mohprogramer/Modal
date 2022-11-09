import React from 'react';

import styles from "./Modal.module.css"

const Modal = ({setIsOpen}) => {
    return (
        <div className={styles.container}>
            <div className={styles.darkBg} onClick={() => setIsOpen(false)} />
            <div className={styles.center}>                
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Header</h5>
                    </div>
                    <button className={styles.deleteBtn} onClick={() => setIsOpen(false)} >Delete</button>
                    <button className={styles.cancelBtn} onClick={() => setIsOpen(false)} >Cancel</button>
                    <h3 className={styles.text}>Are you sure want to delete the item?</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;