'use client';

import styles from './styles.module.css';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { useState } from 'react';
import { PostModel } from '@/models/postModel';
import { ImageUser } from '@/components/ImageUser';
import { ModalPost } from '@/components/ModalPost';

interface PostAddProps{
    handleAddPost: (post: PostModel) => void;
}
export function PostAdd({handleAddPost}: PostAddProps){
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
                <ImageUser urlImage='http://localhost:3001/images/1699906205195.ai_image_history_62844.png' size={50}/>
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