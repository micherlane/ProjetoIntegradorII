'use client';

import styles from './styles.module.css';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { useContext, useEffect, useState } from 'react';
import { PostModel } from '@/models/postModel';
import { ImageUser } from '@/components/ImageUser';
import { ModalPost } from '@/components/ModalPost';
import { AuthContext } from '@/contexts/AuthContext';

interface PostAddProps{
    handleAddPost: (post: PostModel) => void;
}
export function PostAdd({handleAddPost}: PostAddProps){
    const { user } = useContext(AuthContext);
    const [urlUser, setUrlUser] = useState('');

    useEffect(() => {
        if (user) {
            const url = `http://localhost:3001/images/${user.profile.profilePicture}`;
            setUrlUser(url);
        }
    }, [user]);
    
    const [modalVisible, setModalVisible] = useState(false);

    const handlePostClick = () => {
        handleOpenModalView()
       toast.success("Você clicou em adicionar postagem") ;
    };

    const handleOpenModalView = () =>{
        setModalVisible(true);
    }
    const handleCloseModalView = () => {
        setModalVisible(false);
    }
    Modal.setAppElement("#__next");

    return (
        <div>
            <div className={styles.postAddContainer}>
                <ImageUser urlImage={urlUser} size={50}/>
                <div className={styles.postWritterContainer} onClick={handlePostClick}>
                    <p>Escreva sua publicação...</p>
                </div>
            </div>
            {
                modalVisible && (
                    <ModalPost isOpen={modalVisible} handleAddPost={handleAddPost} onRequestClose={handleCloseModalView}/>
                )
            }
        </div>

    );
}