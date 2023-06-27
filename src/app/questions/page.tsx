"use client"
import styles from "./styles.module.css";
import {QuestionCard} from "@/components/QuestionCard/QuestionCard";

export default function Questions () {
    return (
        <section className={styles.questionsWrapper}>
            <div className={styles.headerBlock}>
                <h2 className={styles.headerText}>{"Вопросы-ответы"}</h2>
            </div>
            <QuestionCard
                question={"Что такое Билетопоиск?"}
                answer={"Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."}
            />
            <QuestionCard
                question={"Какой компании принадлежит Билетопоиск?"}
                answer={"Ответа в макете не было:)"}
            />
            <QuestionCard
                question={"Как купить билет на Билетопоиск?"}
                answer={"Ответа в макете не было:)"}
            />
            <QuestionCard
                question={"Как оставить отзыв на Билетопоиск?"}
                answer={"Ответа в макете не было:)"}
            />
        </section>
    )
}