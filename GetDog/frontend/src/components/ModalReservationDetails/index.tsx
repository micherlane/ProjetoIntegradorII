import { ReservationModel } from "@/models/reservationModel";
import Modal from 'react-modal';
import styles from './styles.module.css';
import { FiX } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

interface ModalReservationDetails {
    isOpen: boolean;
    reservation: ReservationModel
    onRequestClose: () => void;
}

export function ModalReservationDetails({ isOpen, reservation, onRequestClose}: ModalReservationDetails){
    const [isOwnReservation, setIsOwnResrvation] = useState<boolean>();

    const {user} = useContext(AuthContext);

    useEffect(() => {
        if(user){
            setIsOwnResrvation(user.id === reservation.user.id);
        }
    }, [user]);
    
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
                style={{ background: 'transparent', border: 0 }}>
                <FiX size={30} color="#ff0000" />
            </button>

            <div className={styles.reservationDetailsContainer}>
                <div>Reserva</div>
                <div>{reservation.appointment}</div>
                <div>{reservation.address}</div>
                <div>{reservation.statusDogWalkReservation}</div>
                <div>{reservation.post.title}</div>
                <div>{reservation.post.legend}</div>
                <div>{reservation.user.name}</div>
                <div>{reservation.user.profile.profilePicture}</div>
                
                <div className={styles.reservationItemActions}>
                    {
                        isOwnReservation ? 
                            <button className={styles.buttonRejectStyle}>Cancelar</button>
                        : 
                        <>
                            <button className={styles.buttonAcceptionStyle}>Aceitar</button>
                            <button className={styles.buttonRejectStyle}>Rejeitar</button>
                        </>
                    }
                </div>
            </div>
        </Modal>
    );
}