import Modal from 'react-modal';
import styles from './styles.module.css';

import { FiX } from 'react-icons/fi';
import { FormEvent, useContext, useState } from 'react';
import { LuImagePlus } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";
import { PostModel } from '@/models/postModel';
import { AuthContext } from '@/contexts/AuthContext';
import { api } from '@/services/apiClient';
import { FaSpinner } from 'react-icons/fa6';


interface ModalPostProps {
    isOpen: boolean;
    onRequestClose: () => void;
    handleAddPost: (post: PostModel) => void;
}
export function ModalPost({ isOpen, onRequestClose, handleAddPost }: ModalPostProps) {
    const [availabilities, setAvailabilities] = useState<string[]>([]);
    const [photos, setPhotos] = useState<any[]>([]);
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [legend, setLegend] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const addAvailability = () => {
        setAvailabilities([...availabilities, '']);
    };

    const addPhotos = () => {
        setPhotos([...photos, null]);
    }

    const handleAvailabilityChange = (index: number, value: string) => {
        const updatedAvailabilities = [...availabilities];
        updatedAvailabilities[index] = value;
        setAvailabilities(updatedAvailabilities);
    };

    const handleFileChange = (event: any, index: number) => {
        const file = event.target.files[0];
        const newPhotos = [...photos];
        newPhotos[index] = file;
        setPhotos(newPhotos);
    };

    const customStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
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

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('legend', legend);
        formData.append('address', address);
        formData.append('authorId', user.id);

        availabilities.forEach((availability, index) => {
            formData.append(`disponibility`, availability);
        });

        photos.forEach((photo, index) => {
            formData.append(`files`, photo);
        });

        try {
            setLoading(true);

            const response = await api.post('/posts', formData);

            setLoading(false);
            const post = PostModel.fromJSON(response.data);

            handleAddPost(post);

            onRequestClose();

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }

    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyle}
        >
            <div className={styles.modalStyle}>
                <div className={styles.buttonContainer}>
                    <button
                        type='button'
                        onClick={onRequestClose}
                        className='react-modal-close'
                        style={{ background: 'transparent', border: 0 }}
                    >
                        <FiX size={45} color="#ff0000" />
                    </button>
                </div>

                <div className={styles.addPostFormContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.titleForm}>
                            <h2>Criar Publicação</h2>
                        </div>

                        <input type='text' placeholder='Adicione um título' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

                        <textarea placeholder='Escreva aqui...' name='legend' value={legend} onChange={(e) => setLegend(e.target.value)} />

                        <input type='text' placeholder='Digite o endereço...' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />

                        <div className={styles.addItemStyle}>
                            <button type='button' onClick={addAvailability} className={styles.addItemButtonStyle}>
                                <BsCalendarDate size={30} />
                                <span>Adicionar</span>
                            </button>
                            {availabilities.map((availability, index) => (
                                <input
                                    key={index}
                                    type='date'
                                    name='disponibility'
                                    value={availability}
                                    onChange={(e) => handleAvailabilityChange(index, e.target.value)}
                                    className={styles.disponibilityStyle}
                                />
                            ))}
                        </div>

                        <div className={styles.addItemStyle}>
                            <button type='button' onClick={addPhotos} className={styles.addItemButtonStyle}>
                                <LuImagePlus size={30} />
                                <span>Adicionar</span>
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


                        <button type='submit' className={styles.publish} disabled={loading}>{loading ? (<FaSpinner color="#FFF"  className={styles.spinner} size={16}/>): <p>Publicar</p>}</button>
                    </form>
                </div>
            </div>

        </Modal>
    )
}