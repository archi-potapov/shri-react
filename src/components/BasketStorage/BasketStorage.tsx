"use client"

import styles from "./styles.module.css"
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const BasketStorage = function({children}: {
    children: React.ReactNode
}) {

    const totalCount = useSelector(state => state.totalCount)

    return (
        <div>

        </div>
    )
}