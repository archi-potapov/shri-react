import styles from "./styles.module.css"
import {FunctionComponent} from "react";

interface Props {
    name: string;
    comment: string;
    score: string;
}

export const Comment: FunctionComponent<Props> = ({name, comment, score}) => {
    return (
        <div className={styles.commentWrapper}>
            <div className={styles.defaultImageFrame}>
                <div className={styles.undefinedIcon}></div>
            </div>
            <div className={styles.commentBody}>
                <div className={styles.nameAndScore}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.score}>{"Оценка: "}<span className={styles.scoreValue}>{score}</span></span>
                </div>
                <div className={styles.comment}>{comment}</div>
            </div>
        </div>
    )
}