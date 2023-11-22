import { useState } from "react";
import { posts } from "../../dadosPost/postsDados";
import { PostItem } from "../PostItem";
import styles  from './styles.module.css';
import { PostModel } from "@/app/models/postModel";

interface PostListProps {
    posts: PostModel[]
}
export function PostList({posts}: PostListProps){

    return (
        <div className={styles.postListStyle}>
        {
            posts.map((post) => {
                return (
                    <PostItem post={post} key={post.id}/>
                );
            })
        }
         </div>
    )
}