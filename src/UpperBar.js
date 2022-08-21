import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./routes/Main.module.css";
import logo from "./logo.png";
import home from "./homeBT.png";

const goHome = () => {
    <Link to="/">Main</Link>
}

const submit = () => {
    <Link to="/submit">Submit</Link>
}

function UpperBar() {



    return (
        <div>
            <h3 className={styles.upperbar}>
                <div><img className={styles.logo} alt="logo" src={logo} /></div>
                <div className={styles.upperBT}>지원하기</div>
                <div className={styles.upperBT} onClick={submit}>과제제출</div>
                <div className={styles.upperBT}>결과확인</div>
                <button className={styles.homeBT} onClick={goHome}>이화이언 홈</button>
            </h3>
        </div>
    );
};

export default UpperBar;
