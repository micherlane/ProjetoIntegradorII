"use client";

import { Header } from "@/components/Header";
import { PostDashboard } from "./components/PostDashboard";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { setupAPIClient } from "@/services/api";
import { PostModel } from "@/models/postModel";
import { useEffect, useState } from "react";

export default function HomePage({ posts }){

    const [postsList, setPostList] = useState<PostModel[]>([]);
    
    useEffect(() => {
    
        const postsModels = posts.map(post => PostModel.fromJSON(post));

        setPostList(postsModels);
        
    }, []);

    return (
        <>
        <Header/>
        <PostDashboard posts={postsList}/>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/posts');

    return {
        props: {
            posts: response.data
        }
    }
});