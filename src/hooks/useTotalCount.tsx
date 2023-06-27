"use client"

import {useCallback, useContext, useState} from "react";
import {Basket, BasketContext} from "@/contexts/BasketContext";
import {Simulate} from "react-dom/test-utils";
import mouseMove = Simulate.mouseMove;

export function useTotalCount(initialValue: Basket) {
    let [value, setTotalCount] = useState(initialValue);
    const setValue = useCallback(() => {setTotalCount(
        (value) => { return value })}, []);

    return { value, setValue }
}