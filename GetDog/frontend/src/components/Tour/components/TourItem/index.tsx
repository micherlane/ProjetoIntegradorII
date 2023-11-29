import { TourModel } from '@/models/toursModel';
import styles from './styles.module.css';
import { ImageUser } from '@/components/ImageUser';
import { formatDate } from '@/utils/dataUtils';
import { FaCalendar} from 'react-icons/fa';
import {  FaHouse }  from 'react-icons/fa6';


interface TuorItemProps {
    tuor: TourModel;
}

export function TuorItem({ tuor } : TuorItemProps){
    const urlImage = tuor.dogWalkReservation.user.profile.profilePicture;

    return (
        <div className={styles.tuorContainer}>
            <div className={styles.tuorItemContainer}>
                <div className={styles.tuorItemUser}>
                    <ImageUser urlImage={urlImage} size={30}/>
                    <p>{tuor.dogWalkReservation.user.name}</p>
                </div>
                <div className={styles.tuorItemDetails}>
                    <p className={styles.titleStyle}>{tuor.dogWalkReservation.post.title}</p>
                    <FaHouse/><p className={styles.addressStyle}>{tuor.dogWalkReservation.address}</p>
                    <FaCalendar/><p className={styles.appointmentStyle}>{formatDate(new Date(tuor.dogWalkReservation.appointment))}</p>
                    <p className={styles.statusStyle}>{tuor.status}</p>
                </div>
                
            </div>
        </div>
    )
}