import { Header } from "../Components/Header";
import { PostAdd } from "./components/PostAdd";
import { PostItem } from "./components/PostItem";

export default function HomePage(){
    return (
        <>
        <Header/>
        <PostAdd/>
        <PostItem/>
        </>
    );
}