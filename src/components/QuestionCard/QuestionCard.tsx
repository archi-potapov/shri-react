import {FunctionComponent, useState} from "react";
import styles from "./styles.module.css";

interface Props {
    question: string;
    answer: string;
}

export const QuestionCard: FunctionComponent<Props> = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

    const questionElement = <h2 onClick={onClickShowButton} className={styles.question}>{question}</h2>;
    const answerElement = <span className={`${styles.answer} ${!isOpen ? styles.answer_hidden : ""}`}>{answer}</span>;
    const showButton = <button onClick={onClickShowButton} className={`${styles.showButton} ${!isOpen ? styles.showButton_disabled : ""}`}></button>;

    function onClickShowButton () {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.questionBlock}>
            <div className={styles.questionBlockMainInfo}>
                {questionElement}
                {answerElement}
            </div>
            {showButton}
        </div>
    )
}