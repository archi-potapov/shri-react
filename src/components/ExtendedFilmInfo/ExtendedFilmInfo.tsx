import {FunctionComponent} from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import {AdditionalOptions} from "@/components/FilmDetails/FilmDetails";
interface Props {
    title: string;
    genre: string;
    id: string;
    additionalOptions: AdditionalOptions;
}

export const ExtendedFilmInfo: FunctionComponent<Props> = ({title, genre, id, additionalOptions}) => {
    return (
        <div className={styles.filmInfo}>
            <Link href={`/movie/${id}`} className={styles.title}>{title || "Unknown Film"}</Link>
            <div className={styles.smallPositions}>
                <div className={styles.descriptionPosition}>
                    {Boolean(genre) && <span className={styles.valueName}>{`Жанр: `}</span>}
                    {Boolean(genre) && <span className={styles.value}>{genre}</span>}
                </div>
                <div className={styles.descriptionPosition}>
                    {Boolean(genre) && <span className={styles.valueName}>{`Год выпуска: `}</span>}
                    {Boolean(genre) && <span className={styles.value}>{additionalOptions.releaseYear}</span>}
                </div>
                <div className={styles.descriptionPosition}>
                    {Boolean(genre) && <span className={styles.valueName}>{`Рейтинг: `}</span>}
                    {Boolean(genre) && <span className={styles.value}>{additionalOptions.rating}</span>}
                </div>
                <div className={styles.descriptionPosition}>
                    {Boolean(genre) && <span className={styles.valueName}>{`Режиссер: `}</span>}
                    {Boolean(genre) && <span className={styles.value}>{additionalOptions.director}</span>}
                </div>
            </div>
            <div className={styles.descriptionBlock}>
                {Boolean(genre) && <span className={styles.valueName}>{`Описание`}</span>}
                {Boolean(genre) && <div className={styles.value}>{additionalOptions.description}</div>}
            </div>
        </div>
    )
}