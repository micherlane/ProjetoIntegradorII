import { PostItem } from "../PostItem";
import styles  from './styles.module.css';
import { PostModel } from "@/models/postModel";

interface PostListProps {
    posts: PostModel[]
}
export function PostList({posts}: PostListProps){

    return (
        <div className={styles.postListStyle}>
        {
            posts.length !== 0 ? 

                posts.map((post) => {
                    return (
                        <PostItem post={post} key={post.id}/>
                    );
                })
            : <p>Não há publicações cadastradas.</p>
        }
         </div>
    )
}