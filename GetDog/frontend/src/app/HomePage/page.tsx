"use client";

import { Header } from "../Components/Header";
import { PostAdd } from "./components/PostAdd";
import { PostList } from "./components/PostList";


export default function HomePage(){

    return (
        <>
        <Header/>
        <PostAdd/>
        <PostList/>
        </>
    );
}