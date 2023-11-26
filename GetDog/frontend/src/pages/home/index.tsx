"use client";

import { Header } from "@/components/Header";
import { PostDashboard } from "./components/PostDashboard";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function HomePage(){

    return (
        <>
        <Header/>
        <PostDashboard/>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {
            
        }
    }
});