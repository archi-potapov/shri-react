import styles from "./styles.module.css"

export const SearchMenu = function () {
    return (
        <aside className={styles.searchMenu}>
            <span className={styles.searchMenu__title}>Фильтр поиска</span>
        </aside>
    )
}