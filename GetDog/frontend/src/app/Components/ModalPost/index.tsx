import Modal from 'react-modal';
import styles from './styles.module.css';

import { FiX } from 'react-icons/fi';
import { PostModel } from '@/app/models/postModel';
import { useState } from 'react';

interface ModalPostProps {
    isOpen: boolean;
    onRequestClose: () => void;
    handleAddPost: (post: PostModel) => void;
}
export function ModalPost({isOpen, onRequestClose, handleAddPost}: ModalPostProps){
    const [availabilities, setAvailabilities] = useState<string[]>([]);
    const [photos, setPhotos] = useState<string[]>([]);

    const addAvailability = () => {
        setAvailabilities([...availabilities, '']);
    };

    const addPhotos = () => {
        setPhotos([...photos, '']);
    }

    const customStyle = {
        content: {
            top: '50%',
            bottom: 'auto',
            margin: '1rem',
            left: '50%',
            right: 'auto',
            padding: '10px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffffff'
        }
    }
    return (
       <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyle}
       >
        <button
            type='button'
            onClick={onRequestClose}
            className='react-modal-close'
            style={{ background: 'transparent', border: 0}}
        >
            <FiX size={30} color="#ff0000"/>
        </button>

        <div className={styles.addPostFormContainer}>
            <form>
                <div className={styles.titleForm}>
                    <h2>Criar Publicação</h2>
                </div>

                <input type='text' placeholder='Adicione um título' name='title'/>

                <textarea placeholder='Escreva aqui...' name='legend'/>

                <input type='text' placeholder='Digite o endereço...' name='address'/>

                <div className={styles.addItemStyle}>
                    {availabilities.map((availability, index) => (
                        <input
                            key={index}
                            type='datetime-local'
                            name='disponibility'
                            className={styles.disponibilityStyle}
                        />
                    ))}
                </div>
                <button type='button' onClick={addAvailability}>
                    Adicionar Disponibilidade
                </button>

                <div className={styles.addItemStyle}>
                     {
                        photos.map((photo, index) => {
                            return ( <input type='file' name='photos' key={index}/>)
                        })
                     }
                </div>

                <button type='button' onClick={addPhotos}>
                    Adicionar imagem
                </button>
               

                <button type='submit'>Publicar</button>
                
            </form>
        </div>
       </Modal>
    )
}