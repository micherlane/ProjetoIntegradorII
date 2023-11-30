import { TourModel } from '@/models/toursModel';
import styles from './styles.module.css';
import { ImageUser } from '@/components/ImageUser';
import { formatDate } from '@/utils/dataUtils';
import { FaCalendar} from 'react-icons/fa';
import {  FaHouse }  from 'react-icons/fa6';
import { STATUS_PASSEIO } from '@/enums/status_passeio';
import { useState } from 'react';
import Modal from 'react-modal';
import { TourDetailsModal } from '../TourDetailsModal';


interface TourItemProps {
    tour: TourModel;
}

export function TourItem({ tour } : TourItemProps){
    const [modalVisible, setModalVisible] = useState(false);
    const reservation = tour.dogWalkReservation;
    const post = reservation.post;
    const urlImage = post.author.profile.profilePicture;
    const [status, setStatus] = useState<string>(STATUS_PASSEIO[tour.status]);

    const handleStatus = (status: string) => {
        tour.status = status;
        setStatus(status);
    }

    const handleReservationClick = () => {
        handleOpenModalView();
    }

    const handleOpenModalView = () =>{
        setModalVisible(true);
    }
    const handleCloseModalView = () => {
        setModalVisible(false);
    }

    Modal.setAppElement("#__next");

    return (
        <div className={styles.tourContainer}>
            <div className={styles.tourItemContainer} onClick={handleReservationClick}>
                <div className={styles.tourItemUser}>
                    <ImageUser urlImage={urlImage} size={30}/>
                    <p>{post.author.name}</p>
                </div>
                <div className={styles.tourItemDetails}>
                    <p className={styles.titleStyle}>{reservation.post.title}</p>
                    <div className={styles.informationTour}>
                        <FaHouse/>
                        <p className={styles.addressStyle}>{reservation.address}</p></div>
                    <div className={styles.informationTour}>
                        <FaCalendar/>
                        <p className={styles.appointmentStyle}>{formatDate(new Date(reservation.appointment))}</p></div>
                    <p className={styles.statusStyle}><span>Situação do passeio: </span>{status}</p>
                </div>
                
            </div>

            {
                modalVisible && (
                    <TourDetailsModal isOpen={modalVisible} tour={tour} onRequestClose={handleCloseModalView} handleStatus={handleStatus}/>
                )
            }
        </div>
    )
}