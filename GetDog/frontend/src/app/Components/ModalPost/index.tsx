import Modal from 'react-modal';
import styles from './styles.module.css';

import { FiX } from 'react-icons/fi';
import { PostModel } from '@/app/models/postModel';
import { FormEvent, useState } from 'react';
import { LuImagePlus } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";


interface ModalPostProps {
    isOpen: boolean;
    onRequestClose: () => void;
    handleAddPost: (post: PostModel) => void;
}
export function ModalPost({isOpen, onRequestClose, handleAddPost}: ModalPostProps){
    const [availabilities, setAvailabilities] = useState<string[]>([]);
    const [photos, setPhotos] = useState<File[]>([]);

    const addAvailability = () => {
        setAvailabilities([...availabilities, '']);
    };

    const addPhotos = () => {
        setPhotos([...photos, null]);
    }

    const handleFileChange = (event: any, index: number) => {
        const file = event.target.files[0];
        const newPhotos = [...photos];
        newPhotos[index] = file;
        setPhotos(newPhotos);
    };

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
                    <button type='button' onClick={addAvailability} className={styles.addItemButtonStyle}>
                        <BsCalendarDate size={30}/>
                        Adicionar
                    </button>
                    {availabilities.map((availability, index) => (
                        <input
                            key={index}
                            type='datetime-local'
                            name='disponibility'
                            className={styles.disponibilityStyle}
                        />
                    ))}
                </div>

                <div className={styles.addItemStyle}>
                    <button type='button' onClick={addPhotos} className={styles.addItemButtonStyle}>
                        <LuImagePlus size={30}/> Adicionar
                    </button>
                    {photos.map((photo, index) => (
                            <input
                                key={index}
                                type='file'
                                name={`photo_${index}`}
                                onChange={(e) => handleFileChange(e, index)}
                            />
                        ))}
                </div>

               

                <button type='submit' className={styles.publish}>Publicar</button>
                
            </form>
        </div>
       </Modal>
    )
}