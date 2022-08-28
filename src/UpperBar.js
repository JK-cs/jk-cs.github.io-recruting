import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./routes/Main.module.css";
import logo from "./logo.png";
import home from "./homeBT.png";


function UpperBar() {



    return (
        <div>
            <h3 className={styles.upperbar}>
                <Link to="/" className={styles.logo} id="home">
                    <img src={logo} alt="ewhaian" />
                </Link>
                <Link to="/apply" className={styles.upperBT}>지원하기</Link>
                <Link to="/submit" className={styles.upperBT}>과제제출</Link>
                <Link to="/result" className={styles.upperBT}>결과확인</Link>
                <a href="http://www.ewhaian.com/" className={styles.homeBT} target='_blank'></a>
            </h3>
        </div>
    );
};

export default UpperBar;
