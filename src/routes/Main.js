import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import logo from "../logo.png";
import mainbanner from "../mainbanner.png";
import UpperBar from "../UpperBar";
import Rectangle from "../Rectangle.png"

function Main() {
    const goHome = () => {
        <link to="/"></link>
    };

    const [activeColor, setActiveColor] = useState(1);
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);

    function handleScroll() {
        if (window.scrollY > 299) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }

    useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll);
        }
        scrollListener();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    function handleNavColor() {
        if (window.scrollY > 0 && window.scrollY < 1600) {
            setScrollY(window.pageYOffset);
            setActiveColor(1);
        } else if (window.scrollY >= 1600 && window.scrollY < 3500) {
            setScrollY(window.pageYOffset);
            setActiveColor(2);
        } else if (window.scrollY >= 3500 && window.scrollY < 6269) {
            setScrollY(window.pageYOffset);
            setActiveColor(3);
        }
    }

    useEffect(() => {
        function scrollColorListener() {
            window.addEventListener("scroll", handleNavColor);
        }
        scrollColorListener();
        return () => {
            window.removeEventListener("scroll", handleNavColor);
        };
    }, [activeColor]);

    return (
        <div>
            <UpperBar />
            <img className={styles.banner} alt="mainbanner" src={mainbanner} />
            <h5 className="styles.middlebar">
                <div className={scrollActive ? "scrollbox-fixed" : "scrollbox"}>
                    <div className={styles.scroll}>지난 이화이언</div>
                    <div className={styles.scroll}>이화이언 소개</div>
                    <div className={styles.scroll}>팀 소개</div>
                </div>
            </h5>
            <div className={styles.lowerbar}>
                <button className={styles.lowerBT} onClick={goHome}>지원하기</button>
                <button className={styles.lowerBT} onClick={goHome}>결과확인</button>
            </div>
        </div >
    );
};

export default Main;