import styles from "./styles.module.css"
import {SearchMenu} from "@/components/SearchMenu/SearchMenu";
import {MovieCard} from "@/components/MovieCard/MovieCard";

export default async function Home() {
    let filmDetailsResponse = await fetch("http://localhost:3001/api/movies");
    let filmDetails = await filmDetailsResponse.json();

    let filmsArray = filmDetails.map((x) =>
         <MovieCard
                posterUrl={x.posterUrl}
                title={x.title}
                genre={x.genre}
                id={x.id}
                canRemoveAll={false}
         />)
  return (
          <>
              <SearchMenu />
              <section className={styles.moviesWrapper}>
                  {...filmsArray}
              </section>
          </>
  )
}
