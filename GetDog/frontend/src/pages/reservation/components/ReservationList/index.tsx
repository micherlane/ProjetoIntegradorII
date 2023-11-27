"use client";

import { ReservationItem } from '../ReservationItem';
import styles from './styles.module.css';
import { ReservationModel } from '@/models/reservationModel';

interface ReservationListProps{
    reservations: ReservationModel[];
}

export function ReservationList({reservations}: ReservationListProps) {
    
    return (
        <div className={styles.reservationStyleContainer}>

            <div className={styles.search}>
                <input type='text' placeholder='Digite o termo que deseja encontrar...'/>
            </div>
            <div className={styles.reservationListStyle}>
                {
                reservations.length === 0? 
                    reservations.map((reservation, index) => {
                        return (
                            <ReservationItem reservation={reservation} key={index}/>
                        );
                    }): 
                <p>Não reservas solicitadas</p>
                }
                
            </div>
        </div>
    );
}