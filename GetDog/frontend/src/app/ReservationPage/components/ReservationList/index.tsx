"use client";

import { ReservationItem } from '../ReservationItem';
import styles from './styles.module.css';

export function ReservationList() {
    const reservationList: string[] = ["dsfs", "hshkf", "shkfjs", "shkfds"];
    return (
        <div className={styles.reservationList}>
            {
                reservationList.map((reservation, index) => {
                    return (
                        <ReservationItem key={index}/>
                    );
                })
            }
        </div>
    );
}