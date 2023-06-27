import styles from "./styles.module.css"
import React from "react";

export const Main = function({children}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.mainWrapper}>
            {children}
        </main>
    )
}