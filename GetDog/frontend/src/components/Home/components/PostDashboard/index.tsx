import React, { useContext, useEffect, useState } from 'react';
import { PostAdd } from '../PostAdd';
import { PostList } from '../PostList';
import styles from './styles.module.css';
import { PostModel } from '@/models/postModel';
import { TYPE_USER } from '@/enums/type_user';
import { AuthContext } from '@/contexts/AuthContext';

interface PostDashboardProps {
    posts: PostModel[];
    handleAddPost: (post: PostModel) => void;
}

export default function PostDashboard({ posts, handleAddPost }: PostDashboardProps) {
    const [postList, setPostList] = useState<PostModel[]>([]);
    const [userTypeFilter, setUserTypeFilter] = useState<TYPE_USER | null>(null);

    useEffect(() => {
        setPostList(posts);
    }, [posts]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = event.target.value as TYPE_USER;
        setUserTypeFilter(selectedType);
        if (selectedType) {
            const filtered = posts.filter(post => post.author.typeUser === selectedType);
            setPostList(filtered);
        } else {
            setPostList(posts);
        }
    };

    return (
        <div className={styles.postDashboardStyle}>
            <div className={styles.postDashboardChildrensStyle}>
                <div className={styles.filterPosts}>
                    <select 
                        value={userTypeFilter || ''}
                        onChange={handleFilterChange}
                        className={styles.filterSelect}
                    >
                        <option value="">Todas</option>
                        <option value={TYPE_USER.DOG_OWNER}>Tutores</option>
                        <option value={TYPE_USER.DOG_WALK}>Passeadores</option>
                    </select>
                </div>
                <PostAdd handleAddPost={handleAddPost} />
                <PostList posts={postList} />
            </div>
        </div>
    );
}
