"use client"

import styles from "./styles.module.css"
import {FunctionComponent, useState} from "react";
import {FilmDetails} from "@/components/FilmDetails/FilmDetails";
import Link from "next/link";
import {createPortal} from "react-dom";
import {RemoveModal} from "@/components/RemoveModal/RemoveModal";
import {useDispatch, useSelector} from "react-redux";
interface Props {
    posterUrl: string;
    title: string;
    genre: string;
    id: string;
    canRemoveAll: boolean
}

export const MovieCard: FunctionComponent<Props> = ({posterUrl, title, genre, id, canRemoveAll}) => {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    let removeButton = <></>;
    if (canRemoveAll) {
        removeButton =
            <div>
                {isModalOpen && createPortal(<RemoveModal acceptFunction={() => {setIsModalOpen(false), dispatch({type: "REMOVE_ALL", payload: {id: id}})}} declineFunction={() => {setIsModalOpen(false)}}/>, document.getElementById("modalsContainer"))}
            <button onClick={() => {setIsModalOpen(true)}} className={styles.removeButton}></button>
        </div>
    }

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
                canRemoveAll={canRemoveAll}
            />
            {removeButton}
        </div>
    )
}