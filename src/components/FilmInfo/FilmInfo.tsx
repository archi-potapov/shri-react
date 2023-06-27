import {FunctionComponent} from "react";
import styles from "./styles.module.css";
import Link from "next/link";
interface Props {
    title: string;
    genre: string;
    id: string;
}

export const FilmInfo: FunctionComponent<Props> = ({title, genre, id}) => {
    return (
        <div className={styles.filmInfo}>
            <Link href={`/movie/${id}`} className={styles.title}>{title || "Unknown Film"}</Link>
            {Boolean(genre) && <span className={styles.genre}>{genre}</span>}
        </div>
    )
}