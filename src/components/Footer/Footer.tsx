import styles from "./styles.module.css"
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <Link className={styles.footerLink} href="/questions">Вопросы-ответы</Link>
                <Link className={styles.footerLink} href="/about">О нас</Link>
            </div>
        </footer>
    )
}