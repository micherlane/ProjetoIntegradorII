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
import { STATUS_TOUR, getNextStatus } from "@/enums/status_tour";
import { TIPO_USUARIO } from "@/enums/tipo_usuario";
import { TYPE_USER } from "@/enums/type_user";

interface TourDetailsModalProps {
    isOpen: boolean;
    tour: TourModel;
    onRequestClose: () => void;
    handleStatus: (string) => void;
}

export function TourDetailsModal({ isOpen, tour, onRequestClose, handleStatus }: TourDetailsModalProps) {
    const { user } = useContext(AuthContext);

    const [status, setStatus] = useState(tour.status);

    const [nextStatus, setNextStatus] = useState(getNextStatus(STATUS_TOUR[tour.status]));

    const reservation = tour.dogWalkReservation;

    const authorPost = reservation.post.author;

    const [isDogOWNER,] = useState<boolean>(user.typeUser === TYPE_USER.DOG_OWNER);

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

    const handleChangeStatusCanceled = async (status: string) => {
        handleStatus(status);
        setStatus(status);
    }

    const handleChangeStatusProgressively = async (status: string) => {
        const statusUpdated = getNextStatus(STATUS_TOUR[status]);
        
        // Atualiza o status do tourItem
         handleStatus(statusUpdated);
 
         // Atualiza o status do detalhe
         const newNextStatus = statusUpdated;
         setStatus(newNextStatus);

             // Atualiza o status do botão
        const newNextStatusButton = getNextStatus(newNextStatus);
        setNextStatus(newNextStatusButton);
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
                        <p>{formatDate(new Date(reservation.appointment))}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Endereço</h3>
                        <p>{reservation.address}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Status</h3>
                        <p>{status}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>Título</h3>
                        <p>{reservation.post.title}</p>
                    </div>
                    <div className={styles.informationTour}>
                        <h3>Descrição</h3>
                        <p>{reservation.post.legend}</p>
                    </div>

                    <div className={styles.informationTour}>
                        <h3>{TIPO_USUARIO[authorPost.typeUser]}</h3>
                        <ImageUser urlImage={authorPost.profile.profilePicture} size={35} />
                        <p>{authorPost.name}</p>

                    </div>

                    <div className={styles.chatStyle}>
                        <Link href="#"> <IoChatbubblesSharp className={styles.icon} size={25} color="#464646" /> <span>Converse com {isDogOWNER ? authorPost.name : reservation.user.name}</span></Link>
                    </div>

                    <div className={styles.tourItemActions}>
                        
                                <button className={styles.buttonRejectStyle} onClick={() => {
                                    handleChangeStatusCanceled(STATUS_TOUR.CANCELED)}}
                                    disabled={status === STATUS_TOUR.CANCELED || status === STATUS_TOUR.CONCLUDED}
                                >Cancelar Passeio</button>
                                
                                {!isDogOWNER ? (<button className={styles.buttonAcceptionStyle} onClick={() => {
                                        handleChangeStatusProgressively(status)
                                    }}
                                    disabled={status === STATUS_TOUR.CANCELED || status === STATUS_TOUR.CONCLUDED}
                                    >Mudar para {nextStatus}</button>
                                ): <></>}
                        
                    </div>
                </div>

            </div>
        </Modal>
    );
}