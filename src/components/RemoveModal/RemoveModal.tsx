"use client"

import styles from "./styles.module.css"
import {FunctionComponent, useState} from "react";

interface Props {
    acceptFunction: () => void;
    declineFunction: () => void;
}

export const RemoveModal: FunctionComponent<Props> = ({acceptFunction, declineFunction}) => {

    const onAccept = (event) => {
        event.stopPropagation()

        if (event.target == event.currentTarget) {
            acceptFunction();
        }
    }
    const onDecline = (event) => {
        event.stopPropagation()

        if (event.target == event.currentTarget) {
            declineFunction();
        }
    }

    return (
        <div onClick={onDecline} className={styles.backgroundWrapper}>
            <div className={styles.removePanel}>
                <div className={styles.modalText}>
                    <span className={styles.modalHeader}>{"Удаление билета"}</span>
                    <span className={styles.modalQuestion}>{"Вы уверены, что хотите удалить билет?"}</span>
                </div>
                <div className={styles.actionButtons}>
                    <button onClick={onAccept} className={styles.acceptButton}><span className={styles.acceptButtonText}>{"Да"}</span></button>
                    <button onClick={onDecline} className={styles.declineButton}><span className={styles.declineButtonText}>{"Нет"}</span></button>
                </div>
                <button onClick={onDecline} className={styles.closeButton}></button>
            </div>
        </div>
    )
}