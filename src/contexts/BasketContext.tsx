"use client"

import React, {Dispatch, SetStateAction} from "react";

export interface Basket {
    readonly totalCount: number;
    readonly movies: {
        [index: string]: number
    };
    add(movieID: string): null;
    remove(movieID: string): null;
}

let defaultValue: Basket = {
    totalCount: 0,
    movies: {},
    add: function (movieID) {
        if (this.movies[movieID]) this.movies[movieID]++;
        else this.movies[movieID] = 1;

        this.totalCount++;
        return null;
    },
    remove: function (movieID) {
        if (this.movies[movieID]) this.movies[movieID]--;
        else this.movies[movieID] = 0;

        this.totalCount--;
        return null;
    }
}

export let BasketContext = React.createContext(defaultValue);