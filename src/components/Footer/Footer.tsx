import styles from "./styles.module.css"
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <Link className={styles.footer__link} href="/questions">Вопросы-ответы</Link>
                <Link className={styles.footer__link} href="/about">О нас</Link>
            </div>
        </footer>
    )
}