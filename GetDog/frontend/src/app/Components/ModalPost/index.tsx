import Modal from 'react-modal';
import styles from './styles.module.css';

import { FiX } from 'react-icons/fi';
import { PostModel } from '@/app/models/postModel';

interface ModalPostProps {
    isOpen: boolean;
    onRequestClose: () => void;
    handleAddPost: (post: PostModel) => void;
}
export function ModalPost({isOpen, onRequestClose, handleAddPost}: ModalPostProps){
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

                <input type='datetime-local' name='disponibility' className={styles.disponibilityStyle}/>

                <input type='file' name='photos'/>

                <button type='submit'>Publicar</button>
                
            </form>
        </div>
       </Modal>
    )
}