import { TourModel } from '@/models/toursModel';
import styles from './styles.module.css';
import { ImageUser } from '@/components/ImageUser';
import { formatDate } from '@/utils/dataUtils';
import { FaCalendar} from 'react-icons/fa';
import {  FaHouse }  from 'react-icons/fa6';
import { STATUS_PASSEIO } from '@/enums/status_passeio';


interface TuorItemProps {
    tour: TourModel;
}

export function TuorItem({ tour } : TuorItemProps){
    const urlImage = tour.dogWalkReservation.user.profile.profilePicture;

    return (
        <div className={styles.tuorContainer}>
            <div className={styles.tuorItemContainer}>
                <div className={styles.tuorItemUser}>
                    <ImageUser urlImage={urlImage} size={30}/>
                    <p>{tour.dogWalkReservation.user.name}</p>
                </div>
                <div className={styles.tuorItemDetails}>
                    <p className={styles.titleStyle}>{tour.dogWalkReservation.post.title}</p>
                    <div className={styles.informationTour}>
                        <FaHouse/>
                        <p className={styles.addressStyle}>{tour.dogWalkReservation.address}</p></div>
                    <div className={styles.informationTour}>
                        <FaCalendar/>
                        <p className={styles.appointmentStyle}>{formatDate(new Date(tour.dogWalkReservation.appointment))}</p></div>
                    <p className={styles.statusStyle}><span>Situação do passeio: </span>{STATUS_PASSEIO[tour.status]}</p>
                </div>
                
            </div>
        </div>
    )
}