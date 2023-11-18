import { PostAdd } from "../PostAdd";
import { PostList } from "../PostList";
import styles from './styles.module.css';

export function PostDashboard() {
    return (
        <div className={styles.postDashboardStyle}>
            <div className={styles.postDashboardChildrensStyle}>
                <PostAdd />
                <PostList />
            </div>
        </div>
    )
}