import {useEffect, useState} from "react";
import styles from "./Main.module.css";

function Main() {
    const goHome = () => {
        <link to = "/"></link>
    };
    return (
        <div className={styles.upperbar}>
            <img className="logo" alt="logo" src="../logo.png" />
            <div className="지원하기">지원하기</div>
            <div className="결과확인">결과확인</div>
            <button onClick={goHome}>이화이언 홈</button>
        </div>
      );
};

export default Main;