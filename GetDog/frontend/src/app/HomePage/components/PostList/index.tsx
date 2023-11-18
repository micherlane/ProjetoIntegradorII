import { posts } from "../../dadosPost/postsDados";
import { PostItem } from "../PostItem";
import styles  from './styles.module.css';

export function PostList(){
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