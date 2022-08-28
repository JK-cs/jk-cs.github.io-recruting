import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import logo from "../logo.png";
import mainbanner from "../mainbanner.png";
import main from "../main설명.png";

function Main() {

    /*

            <div className={styles.lowerbar}>
                <button className={styles.lowerBT} onClick={goHome}>지원하기</button>
                <button className={styles.lowerBT} onClick={goHome}>결과확인</button>
            </div>
    */
    return (
        <div>
            <img className={styles.banner} alt="mainbanner" src={mainbanner} />

            <h5 className="styles.middlebar">
                <div className={styles.scroll}>지난 이화이언</div>
                <div className={styles.scroll}>이화이언 소개</div>
                <div className={styles.scroll}>팀 소개</div>
            </h5>
            <img className={styles.main} alt="main" src={main} />

        </div>

    );
};

export default Main;