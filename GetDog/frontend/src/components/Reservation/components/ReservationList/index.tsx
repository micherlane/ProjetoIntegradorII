import { FiRefreshCcw } from 'react-icons/fi';
import {ReservationItem} from '../ReservationItem';
import styles from './styles.module.css';
import { ReservationModel } from '@/models/reservationModel';

interface ReservationListProps{
    reservations: ReservationModel[];
    handleRefreshReservations: () => Promise<void>;
}

export function ReservationList({reservations, handleRefreshReservations}: ReservationListProps) {
    
    return (
        <div className={styles.reservationStyleContainer}>
            <div className={styles.reservationTitle}>
                <h2>Reservas</h2>
                <button onClick={handleRefreshReservations}>
                    <FiRefreshCcw color="#464646" size={25}/>
                </button>
            </div>
            
            <div className={styles.reservationListStyle}>
                {
                reservations.length !== 0? 
                    reservations.map((reservation, index) => {
                        return (
                            <ReservationItem reservation={reservation} key={index}/>
                        );
                    }): 
                <p>Não há reservas cadastradas.</p>
                }
                
            </div>
        </div>
    );
}