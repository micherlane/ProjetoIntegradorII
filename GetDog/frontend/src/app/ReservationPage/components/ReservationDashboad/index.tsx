"use client";

import { ReservationList } from "../ReservationList";
import { ReservationNav } from "../ReservationNav";
import styles from './styles.module.css';

export function ReservationDashboard(){
    return (
        <div className={styles.reservationDashboardStyle}>
            <ReservationNav/>
            <ReservationList/>
        </div>
    )
}