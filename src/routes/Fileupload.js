import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import UpperBar from "../UpperBar";
import React from "react";
import submit from "../submitBT.png";


function Upload() {


    const [Assignment, setAssignment] = React.useState();
    const upload = () => {

    };

    return (
        <div>
            <UpperBar />
            <h2 className={styles.submit}>과제제출</h2>
            <div className={styles.submit_txt}><label htmlfor="Assignment">과제 업로드</label></div>
            <input className={styles.submit_form} value={Assignment} id="Assignment" />
            <div> <img className={styles.submitBT} src={submit} onClick={upload}></img></div>
        </div >
    );
};

export default Upload;