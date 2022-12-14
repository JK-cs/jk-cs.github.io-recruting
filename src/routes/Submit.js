import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import React from "react";
import { Link } from "react-router-dom"
import check from "../check.png";


function Submit() {

    const [name, setName] = React.useState();
    const [studentNum, setStudentNum] = React.useState();
    const [ewhaianID, setEwhaianID] = React.useState();
    const check = () => {
        <Link To="/upload" className={styels.submitBT}></Link>
    };

    return (
        <div>
            <h2 className={styles.submit}>과제제출</h2>
            <div className={styles.submit_txt}><label htmlfor="name">성명</label></div>
            <input className={styles.submit_form} value={name} id="name" type="text" />
            <div className={styles.submit_txt}><label htmlfor="std_num">학번</label></div>
            <input className={styles.submit_form} value={studentNum} id="std_num" type="number" />
            <div className={styles.submit_txt}><label htmlfor="ewhaian_id">이화이언 아이디</label></div>
            <input className={styles.submit_form} value={ewhaianID} id="ewhaian_id" />
            <div> <img className={styles.checkBT} src={check} ></img></div>
            <div className={styles.submit_txt}><a href="http://localhost:3000/JK-cs/jk-cs.github.io-recruting.git#/upload" className={styles.submitBT} target='_blank'></a></div>
        </div >
    );
};

export default Submit;