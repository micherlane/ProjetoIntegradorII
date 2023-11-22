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
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1d1d2e'
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
            <FiX size={45} color="#f34748"/>
        </button>
       </Modal>
    )
}