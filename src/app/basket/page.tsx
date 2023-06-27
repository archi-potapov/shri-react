"use client"

import styles from "./styles.module.css"
import {useSelector} from "react-redux";
import {MovieCard} from "@/components/MovieCard/MovieCard";
export default function Page () {

    const state = useSelector(state => state)
    const entries = Object.entries(state.movies);
    const filteredDataArray = entries.filter((x) => x[1][2]);

    let moviesArray = filteredDataArray.map(x =>
        <MovieCard
        posterUrl={x[1][4]}
        title={x[1][1]}
        genre={x[1][3]}
        id={x[0]}
        canRemoveAll={true}
    />)

    return (
        <section className={styles.basketWrapper}>
            <div className={styles.moviesList}>
                {...moviesArray}
            </div>
            <div className={styles.commonValuePanel}>
                <span className={styles.commonValueText}>{`Итого билетов:`}</span>
                <span className={styles.commonValueText}>{state.totalCount}</span>
            </div>
        </section>
    )
}