"use client";

import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { setupAPIClient } from "@/services/api";
import { PostModel } from "@/models/postModel";
import { useState } from "react";
import Head from "next/head";
import PostDashboard from "@/components/Home/components/PostDashboard";

export default function HomePage({ posts }){

    const [postsList, setPostList] = useState<PostModel[]>(posts.map(post => PostModel.fromJSON(post)));

    const handleAddPost = (post: PostModel) => {
        setPostList(prevPosts => [ post, ...prevPosts,]);
    };

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
        <Header/>
        <PostDashboard posts={postsList} handleAddPost={handleAddPost}/>
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