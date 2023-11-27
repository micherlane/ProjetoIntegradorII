import Modal from 'react-modal';
import styles from './styles.module.css';
import { ReservationModel } from '@/models/reservationModel';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { FiX } from 'react-icons/fi';

interface ModalReservationAddProps {
    isOpen: boolean;
    onRequestClose: () => void;
    postId: string;
}

export function ModalReservationAdd({isOpen, onRequestClose, postId}: ModalReservationAddProps){
    const { user } = useContext(AuthContext);

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