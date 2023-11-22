'use client';

import { ImageUser } from '@/app/Components/ImageUser';
import styles from './styles.module.css';
import { toast } from 'react-toastify';
import { PostModel } from '@/app/models/postModel';
import Modal from 'react-modal';
import { useState } from 'react';
import { ModalPost } from '@/app/components/ModalPost';

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
    Modal.setAppElement(".__className_e66fe9");

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