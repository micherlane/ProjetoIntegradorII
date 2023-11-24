"use client";

import { ReservationItem } from '../ReservationItem';
import styles from './styles.module.css';
import { reservations } from '../../dadosReservation';

export function ReservationList() {
    
    return (
        <div className={styles.reservationStyleContainer}>

            <div className={styles.search}>
                <input type='text' placeholder='Digite o termo que deseja encontrar...'/>
            </div>
            <div className={styles.reservationListStyle}>
                {
                    reservations.map((reservation, index) => {
                        return (
                            <ReservationItem reservation={reservation} key={index}/>
                        );
                    })
                }
            </div>
        </div>
    );
}