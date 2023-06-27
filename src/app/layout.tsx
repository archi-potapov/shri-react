"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {Main} from "@/components/Main/Main";
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {RemoveModal} from "@/components/RemoveModal/RemoveModal";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Билетопоиск',
  description: 'Найдите билет на свой фильм',
}
let defaultState = {
    totalCount: 0,
    movies: {},
    add: function ({id, title, genre, posterUrl}) {
        if (this.movies[id]) {
            if (this.movies[id][2] < 30) {
                this.movies[id][2]++;
                this.totalCount++;
            }
        }
        else {
            this.movies[id] = [id, title, 1, genre, posterUrl];
            this.totalCount++;
        }
        return this;
    },
    remove: function ({id}) {
        if (this.movies[id]) {
            if (this.movies[id][2] > 0) {
                this.movies[id][2]--;
                this.totalCount--;
            }
        }
        return this;
    },
    removeAll: function ({id}) {
        if (this.movies[id]) {
            if (this.movies[id][2] > 0) {
                this.totalCount -= this.movies[id][2];
                this.movies[id][2] = 0;
            }
        }
        return this;
    }
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            return {...state.add(action.payload)};
        case "REMOVE":
            return {...state.remove(action.payload)};
        case "REMOVE_ALL":
            return {...state.removeAll(action.payload)};
        default:
            return state;
    }
}

const store = createStore(reducer)

export default function RootLayout({children}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en">
        <Provider store={store}>
          <body className={inter.className}>
          <div id={"modalsContainer"}></div>
              <Header />
                  <Main>
                      {children}
                  </Main>
              <Footer />
          </body>
        </Provider>
    </html>
  )
}
