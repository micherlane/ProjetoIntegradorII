import { AuthContext } from "@/contexts/AuthContext";
import { TourModel } from "@/models/toursModel";
import { useContext, useState } from "react";
import styles from './styles.module.css';
import Modal from 'react-modal';
import { formatDate } from "@/utils/dataUtils";
import { FiX } from "react-icons/fi";
import { STATUS_PASSEIO } from "@/enums/status_passeio";
import { ImageUser } from "@/components/ImageUser";
import { IoChatbubblesSharp } from "react-icons/io5";
import Link from "next/link";
import { STATUS_TOUR } from "@/enums/status_tour";

interface TourDetailsModalProps {
    isOpen: boolean;
    tour: TourModel;
    onRequestClose: () => void;
    handleStatus: (string) => void;
}

export function TourDetailsModal({ isOpen, tour, onRequestClose, handleStatus }: TourDetailsModalProps){
    const { user } = useContext(AuthContext);

    const [isOwnReservation,] = useState<boolean>(user.id === tour.dogWalkReservation.user.id);

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

    const handleChangeStatusTour = async (status: string) => {
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

                <div className={styles.tourDetailsContainer}>
                    <div className={styles.titleTourContainer}>
                        <h2 className={styles.titleTour}>Acompanhamento de Passeio</h2>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Data agendada</h3>
                        <p>{formatDate(new Date(tour.dogWalkReservation.appointment))}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Endereço</h3>
                        <p>{tour.dogWalkReservation.address}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Status</h3>
                        <p>{STATUS_PASSEIO[tour.status]}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Título</h3>
                        <p>{tour.dogWalkReservation.post.title}</p>
                    </div>
                    <div className={styles.informationTour}>
                        <h3>Descrição</h3>
                        <p>{tour.dogWalkReservation.post.legend}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Solicitante</h3>
                        <ImageUser urlImage={tour.dogWalkReservation.post.author.profile.profilePicture} size={35}/>
                        <p>{tour.dogWalkReservation.post.author.name}</p>

                    </div>

                    <div className={styles.chatStyle}>
                        <Link href="#"> <IoChatbubblesSharp className={styles.icon} size={25} color="#464646" /> <span>Converse com { isOwnReservation ? tour.dogWalkReservation.post.author.name : tour.dogWalkReservation.user.name}</span></Link>
                    </div>

                    <div className={styles.tourItemActions}>
                        {
                            isOwnReservation ?
                                <button className={styles.buttonRejectStyle} onClick={() => {
                                    handleChangeStatusTour(STATUS_TOUR.CANCELED)
                                }}>Cancelar Reserva</button>
                                :
                                <>
                                    <button className={styles.buttonAcceptionStyle} onClick={() => {
                                        handleChangeStatusTour(STATUS_TOUR.IN_PROGRESS)
                                    }}>Aceitar Reserva</button>
                                </>
                        }
                    </div>
                </div>

            </div>
        </Modal>
    );
}