"use client"

import styles from "./styles.module.css"
import {FunctionComponent} from "react";
import {FilmDetails} from "@/components/FilmDetails/FilmDetails";
import Link from "next/link";

interface Props {
    posterUrl: string;
    title: string;
    genre: string;
    id: string;
}

export const ExtendedMovieCard: FunctionComponent<Props> = ({posterUrl, title, genre, id, description, director, rating, releaseYear}) => {

    return (
        <div className={styles.movieCard}>
            <Link href={`/movie/${id}`} className={styles.posterWrapper}>
                <img className={styles.posterImage} src={posterUrl} alt="Poster image"/>
            </Link>
            <FilmDetails
                title={title}
                genre={genre}
                id={id}
                posterUrl={posterUrl}
                additionalOptions={{description: description, director: director, rating: rating, releaseYear: releaseYear}}
            />
        </div>
    )
}