import {useEffect, useState} from "react";
import styles from "./Main.module.css";

function Main() {
    const goHome = () => {
        <link to = "/"></link>
    };
    return (
        <div>
        <h3 className={styles.upperbar}>
            <div><img className={styles.logo} alt="logo" src="../logo.png" /></div>
            <div className={styles.upperBT}>지원하기</div>
            <div className={styles.upperBT}>결과확인</div>
            <button className={styles.homeBT} onClick={goHome}></button>
        </h3>
        <div><img className={styles.banner} alt="banner" src="img/banner.png" /></div>
        <div className={styles.lowerbar}>
        <button className={styles.lowerBT} onClick={goHome}>지원하기</button>
        <button className={styles.lowerBT} onClick={goHome}>결과확인</button>
        </div>
        </div>
      );
};

export default Main;