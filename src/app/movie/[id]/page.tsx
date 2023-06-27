import {ExtendedMovieCard} from "@/components/ExtendedMovieCard/ExtendedMovieCard";
import styles from "./styles.module.css"
import {Comment} from "@/components/Comment/Comment";

export default async function Movie ({params}: {params: {id: number}}) {
    const movieInfoResponse = await fetch(`http://localhost:3001/api/movie?movieId=${params.id}`);
    const movieInfo = await movieInfoResponse.json();

    const commentsResponse = await fetch(`http://localhost:3001/api/reviews?movieId=${params.id}`);
    const commentsArray = await commentsResponse.json();
    const commentsComponents = commentsArray.map(x =>
        <Comment
            name={x.name}
            comment={x.text}
            score={x.rating}
    />)

    return (
        <div className={styles.moviePageWrapper}>
            <section className={styles.movieSectionWrapper}>
                <ExtendedMovieCard posterUrl={movieInfo.posterUrl}
                                   title={movieInfo.title}
                                   genre={movieInfo.genre}
                                   id={movieInfo.id}
                                   releaseYear={movieInfo.releaseYear}
                                   description={movieInfo.description}
                                   director={movieInfo.director}
                                   rating={movieInfo.rating}
                />
            </section>
            <section className={styles.movieCommentsWrapper}>
                {...commentsComponents}
            </section>
        </div>
    )
}