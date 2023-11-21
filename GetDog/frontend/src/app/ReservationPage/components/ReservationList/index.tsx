"use client";

import styles from './styles.module.css';

export function ReservationList() {
    const reservationList: string[] = [];
    return (
        <div className={styles.reservationList}>
            {
                reservationList.map((reservation) => {
                    return (
                        <>{reservation}</>
                    );
                })
            }
        </div>
    );
}