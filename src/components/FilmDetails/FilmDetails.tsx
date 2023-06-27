"use client"

import {FunctionComponent, useContext, useEffect, useState} from "react";
import {FilmInfo} from "@/components/FilmInfo/FilmInfo";
import {ExtendedFilmInfo} from "@/components/ExtendedFilmInfo/ExtendedFilmInfo";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RemoveModal} from "@/components/RemoveModal/RemoveModal";
import {createPortal} from "react-dom";
export interface Props {
    title: string;
    genre: string;
    id: string;
    posterUrl: string;
    additionalOptions: AdditionalOptions;
    canRemoveAll: boolean;
}
export interface AdditionalOptions {
    description: string;
    director: string;
    rating: string;
    releaseYear: string;
}

export const FilmDetails: FunctionComponent<Props> = ({
    title, genre, id, posterUrl, additionalOptions, canRemoveAll
}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const [isModalOpen, setIsModalOpen] = useState(false);

    let filmInfo;
    if (!additionalOptions) {
        filmInfo = <FilmInfo
            title={title}
            genre={renameGenreFromEnToRu(genre)}
            id={id}
        />
    }
    else {
        filmInfo = <ExtendedFilmInfo
            title={title}
            genre={renameGenreFromEnToRu(genre)}
            id={id}
            additionalOptions={additionalOptions}
        />
    }

    return (
        <div className={styles.movieCard}>
            {filmInfo}
            <div className={styles.counterWrapper}>
                {isModalOpen && createPortal(<RemoveModal acceptFunction={() => {setIsModalOpen(false), dispatch({type: "REMOVE", payload: {id: id}})}} declineFunction={() => {setIsModalOpen(false)}}/>, document.getElementById("modalsContainer"))}
                <button className={styles.minusButton} onClick={() => {
                    if (state.movies[`${id}`] && state.movies[`${id}`][2] == 1 && canRemoveAll) {
                        setIsModalOpen(true);
                    } else { dispatch({type: "REMOVE", payload: {id: id}}) } }} />
                <span className={styles.counterText}>{state.movies[`${id}`] ? state.movies[`${id}`][2] : 0}</span>
                <button className={styles.plusButton} onClick={() => {dispatch({type: "ADD", payload: {id: id, title: title, genre: genre, posterUrl: posterUrl}})
                     }} />
            </div>
        </div>
    )
}

function renameGenreFromEnToRu (genre: string): string {
    let result = "";

    switch (genre) {
        case "fantasy":
            result = "Фэнтези";
            break;
        case "horror":
            result = "Ужасы";
            break;
        case "action":
            result = "Боевик";
            break;
        case "comedy":
            result = "Комедия";
            break;
    }

    return result;
}