import React from "react";
import styles from './fragment.module.css'

const Fragment1 = (Props:any) => {

  return (
    <>
      <h1 className={styles.h1}>{Props.princial}</h1>
      <h2>{Props.secundario}</h2>
    </>
  );
};

export default Fragment1;
