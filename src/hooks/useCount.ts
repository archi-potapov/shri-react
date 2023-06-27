"use client"

import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";

export function useCount(initialValue: number = 0) {
    let [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const decrement = useCallback((movieID: string) => {setCount(
        (currentCount) => {
            if (currentCount > 0) {
                dispatch({type: "REMOVE", payload: movieID});
                return currentCount - 1;
            }
            else {
                return currentCount
            }
        })}, []);
    const increment = useCallback((movieID: string) => {setCount(
        (currentCount) => {
            if (currentCount < 30) {
                dispatch({type: "ADD", payload: movieID});
                return currentCount + 1;
            }
            else return currentCount;
        })}, []);

    return { count, decrement, increment }
}