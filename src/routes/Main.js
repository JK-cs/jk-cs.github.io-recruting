import {useEffect, useState} from "react";
import styles from "./Main.module.css";

function Main() {
    const goHome = () => {
        <link to = "/"></link>
    };
    return (
        <div>
        <div className={styles.upperbar}>
            <div><img className={styles.logo} alt="logo" src="../logo.png" /></div>
            <div className={styles.지원하기}>지원하기</div>
            <div className={styles.결과확인}>결과확인</div>
            <button className={styles.homeBT} onClick={goHome}></button>
        </div>
        <div classname={styles.banner}></div>
        </div>
      );
};

export default Main;