import { useEffect, useState } from "react";
import { PostAdd } from "../PostAdd";
import { PostList } from "../PostList";
import styles from './styles.module.css';
import { PostModel } from "@/models/postModel";

interface PostDashboardProps {
    posts: PostModel[];
}

export function PostDashboard({posts}: PostDashboardProps) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList(posts)
    }, [posts])

    const handleAddPost = (post: PostModel) => {
        postList.push(post);
        setPostList(postList);
    }
    return (
        <div className={styles.postDashboardStyle}>
            <div className={styles.postDashboardChildrensStyle}>
                <PostAdd handleAddPost={handleAddPost}/>
                <PostList posts={postList} />
            </div>
        </div>
    )
}