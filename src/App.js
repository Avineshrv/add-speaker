import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import styles from "./styles/Home.module.scss";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  console.log(isOpen);
  

  return (
    <div className={`${styles.container} ${isOpen ? styles.blackBackground : styles.whiteBackground}`}>
      {!isOpen && <>
        <h1 className={styles.heading}>Add Speaker</h1>
        <button onClick={handleClick} className={styles.addButton}>
          Add Speaker
        </button>
      </>}
      {isOpen && <Sidebar onClose={handleClose} />}
    </div>
  );
}