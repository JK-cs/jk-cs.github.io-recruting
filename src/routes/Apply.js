import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import React from "react";
import check from "../check.png";
import { Link } from "react-router-dom";


function Apply() {

    const [name, setName] = React.useState();
    const [studentNum, setStudentNum] = React.useState();
    const [ewhaianID, setEwhaianID] = React.useState();
    const [assignment, setAssignment] = React.useState();

    return (
        <div>
            <h2 className={styles.submit}>지원하기</h2>
            <div className={styles.submit_txt}><label htmlfor="name">성명</label></div>
            <input className={styles.submit_form} value={name} id="name" type="text" />
            <div className={styles.submit_txt}><label htmlfor="std_num">학번</label></div>
            <input className={styles.submit_form} value={studentNum} id="std_num" type="number" />
            <div className={styles.submit_txt}><label htmlfor="ewhaian_id">이화이언 아이디</label></div>
            <input className={styles.submit_form} value={ewhaianID} id="ewhaian_id" />
            <div> <img className={styles.applyBT} src={check} ></img></div>
            <Link to="/upload" className={styles.download}>→지원서 다운로드</Link>
        </div >
    );
};

export default Apply;