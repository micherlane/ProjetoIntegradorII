import { ReservationModel } from "@/models/reservationModel";
import Modal from 'react-modal';
import styles from './styles.module.css';
import { FiX } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { STATUS_RESERVATION } from "@/enums/status_reservation";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import Link from "next/link";
import { IoChatbubblesSharp } from "react-icons/io5";
import { formatDate } from "@/utils/dataUtils";
import { ImageUser } from "@/components/ImageUser";

interface ModalReservationDetails {
    isOpen: boolean;
    reservation: ReservationModel
    onRequestClose: () => void;
    handleStatus: (string) => void;
}

export function ModalReservationDetails({ isOpen, reservation, onRequestClose, handleStatus }: ModalReservationDetails) {
    const { user } = useContext(AuthContext);

    const [isOwnReservation,] = useState<boolean>(user.id === reservation.user.id);


    const handleChangeStatusReservation = async (status: string) => {
        try {

            const response = await api.post('/reservations/status', {
                id: reservation.id,
                status: status
            });

            const statusReservation = response.data['statusDogWalkReservation'];

            handleStatus(statusReservation);

            toast.success('Status da reserva atualizado!');

        } catch (err) {
            toast.error('Erro ao fazer a mudança no status da reserva!');
        }

        onRequestClose();
    }
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
            <div className={styles.modalStyle}>
                <div className={styles.buttonContainer}>
                    <button
                        type='button'
                        onClick={onRequestClose}
                        className='react-modal-close'
                        style={{ background: 'transparent', border: 0 }}>
                        <FiX size={30} color="#ff0000" />
                    </button>
                </div>

                <div className={styles.reservationDetailsContainer}>
                    <div className={styles.titleReservationContainer}>
                        <h2 className={styles.titleReservation}>Reserva de Passeio</h2>
                    </div>

                    <div className={styles.informationReservation}>
                        <h3>Data agendada</h3>
                        <p>{formatDate(new Date(reservation.appointment))}</p>
                    </div>

                    <div className={styles.informationReservation}>
                        <h3>Endereço</h3>
                        <p>{reservation.address}</p>
                    </div>

                    <div className={styles.informationReservation}>
                        <h3>Status</h3>
                        <p>{reservation.statusDogWalkReservation}</p>
                    </div>

                    <div className={styles.informationReservation}>
                        <h3>Título</h3>
                        <p>{reservation.post.title}</p>
                    </div>
                    <div className={styles.informationReservation}>
                        <h3>Descrição</h3>
                        <p>{reservation.post.legend}</p>
                    </div>

                    <div className={styles.informationReservation}>
                        <h3>Solicitante</h3>
                        <ImageUser urlImage={reservation.user.profile.profilePicture} size={35}/>
                        <p>{reservation.user.name}</p>

                    </div>

                    <div className={styles.chatStyle}>
                        <Link href="#"> <IoChatbubblesSharp className={styles.icon} size={25} color="#464646" /> <span>Converse com { isOwnReservation ? reservation.post.author.name : reservation.user.name}</span></Link>
                    </div>

                    <div className={styles.reservationItemActions}>
                        {
                            isOwnReservation ?
                                <button className={styles.buttonRejectStyle} onClick={() => {
                                    handleChangeStatusReservation(STATUS_RESERVATION.CANCELED)
                                }}
                                disabled={reservation.statusDogWalkReservation === STATUS_RESERVATION.CANCELED || reservation.statusDogWalkReservation === STATUS_RESERVATION.DECLINED || reservation.statusDogWalkReservation === STATUS_RESERVATION.ACCEPTED}
                                >Cancelar Reserva</button>
                                :
                                <>
                                    <button className={styles.buttonAcceptionStyle} onClick={() => {
                                        handleChangeStatusReservation(STATUS_RESERVATION.ACCEPTED)
                                    }}
                                    disabled={reservation.statusDogWalkReservation === STATUS_RESERVATION.ACCEPTED || reservation.statusDogWalkReservation === STATUS_RESERVATION.CANCELED || reservation.statusDogWalkReservation === STATUS_RESERVATION.DECLINED}
                                    >Aceitar Reserva</button>
                                    <button className={styles.buttonRejectStyle} onClick={() => {
                                        handleChangeStatusReservation(STATUS_RESERVATION.DECLINED)
                                    }}
                                    disabled={reservation.statusDogWalkReservation === STATUS_RESERVATION.ACCEPTED || reservation.statusDogWalkReservation === STATUS_RESERVATION.CANCELED || reservation.statusDogWalkReservation === STATUS_RESERVATION.DECLINED}
                                    >Rejeitar Reserva</button>
                                </>
                        }
                    </div>
                </div>

            </div>
        </Modal>
    );
}