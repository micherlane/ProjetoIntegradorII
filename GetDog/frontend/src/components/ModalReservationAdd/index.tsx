import styles from './styles.module.css';
import Modal from 'react-modal';

import { FiX } from 'react-icons/fi';
import { PostModel } from '@/models/postModel';

interface ModalReservationAddProps {
    isOpen: boolean;
    onRequestClose: () => void;
    post: PostModel;
}

export function ModalReservationAdd({isOpen, onRequestClose, post}: ModalReservationAddProps){

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

    const handleAdd = () => {}

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
                style={{ background: 'transparent', border: 0 }}
            >
                <FiX size={30} color="#ff0000" />
            </button>

        </Modal>
    )
}