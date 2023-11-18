import { Metadata } from "next";
import { Header } from "../Components/Header";
import { PostAdd } from "./components/PostAdd";
import { PostItem } from "./components/PostItem";

export const metadata: Metadata = {
    title: 'Home',
}

  
export default function HomePage(){
    return (
        <>
        <Header/>
        <PostAdd/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        </>
    );
}