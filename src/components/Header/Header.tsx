"use client"

import styles from "./styles.module.css"
import Link from "next/link";
import {FunctionComponent} from "react";
import {useSelector} from "react-redux";
export const Header: FunctionComponent = () => {

    const totalCount = useSelector(state => state.totalCount)

    let orderCounterComponent = <></>;
    if (totalCount) {
        orderCounterComponent = <div className={styles.basketCounter}>
            <span className={styles.counterText}>{totalCount}</span>
        </div>
    }

    return (
        <header className={styles.header}>
            <nav className={styles.headerWrapper}>
                <Link className={styles.headerText} href="/">Билетопоиск</Link>
                <Link className={styles.basketWrapper} href="/basket">
                    {orderCounterComponent}
                    <button className={styles.basket}></button>
                </Link>
            </nav>
        </header>
    )
}