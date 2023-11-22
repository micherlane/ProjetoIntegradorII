import { useState } from "react";
import { posts } from "../../dadosPost/postsDados";
import { PostAdd } from "../PostAdd";
import { PostList } from "../PostList";
import styles from './styles.module.css';
import { PostModel } from "@/app/models/postModel";

export function PostDashboard() {
    const [postList, setPostList] = useState(posts || []);

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