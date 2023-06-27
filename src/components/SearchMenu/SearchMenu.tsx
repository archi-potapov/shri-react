"use client"

import styles from "./styles.module.css"

export const SearchMenu = function () {
    return (
        <aside className={styles.searchMenu}>
            <span className={styles.searchMenuTitle}>{"Фильтр поиска"}</span>
            <div className={styles.filtersWrapper}>
                <div className={styles.filter}>
                    <span className={styles.filterName}>{"Название"}</span>
                    <input className={styles.textInput} type="text" placeholder="Введите название"/>
                </div>
                <div className={styles.filter}>
                    <span className={styles.filterName}>{"Жанр"}</span>
                    <input className={styles.textInput} type="text" placeholder="Выберите жанр"/>
                </div>
                <div className={styles.filter}>
                    <span className={styles.filterName}>{"Кинотеатр"}</span>
                    <input className={styles.textInput} type="text" placeholder="Выберите кинотеатр"/>
                </div>
            </div>
        </aside>
    )
}