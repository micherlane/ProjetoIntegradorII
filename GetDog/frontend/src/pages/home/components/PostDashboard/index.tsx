import { useEffect, useState } from "react";
import { PostAdd } from "../PostAdd";
import { PostList } from "../PostList";
import styles from './styles.module.css';
import { PostModel } from "@/models/postModel";

interface PostDashboardProps {
    posts: PostModel[];
    handleAddPost: (post: PostModel) => void;
}

export function PostDashboard({posts, handleAddPost}: PostDashboardProps) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList(posts)
    }, [posts])

   
    return (
        <div className={styles.postDashboardStyle}>
            <div className={styles.postDashboardChildrensStyle}>
                <PostAdd handleAddPost={handleAddPost}/>
                <PostList posts={postList} />
            </div>
        </div>
    )
}