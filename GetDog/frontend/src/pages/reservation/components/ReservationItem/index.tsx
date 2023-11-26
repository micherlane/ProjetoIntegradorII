"use client";

import { ReservationModel } from "@/models/reservationModel";
import styles from "./styles.module.css";
import { ImageUser } from "@/components/ImageUser";

interface ReservationItemProps {
    reservation: ReservationModel
}

export function ReservationItem({reservation}: ReservationItemProps){
    const urlImage = reservation.user.profile?.profilePicture;
    return (
        <div className={styles.reservationItemContainer}>
            <div className={styles.reservationItemUser}>
                <ImageUser urlImage={urlImage} size={30}/>
                <p>{reservation.user.name}</p>
            </div>
            <div className={styles.reservationItemDetails}>
                <p className={styles.titleStyle}>Divulgando meus serviços sobre os passeios com cachorros</p>
                <p className={styles.addressStyle}>{reservation.address}</p>
                <p className={styles.statusStyle}>{reservation.statusDogWalkReservation}</p>
            </div>
            <div className={styles.reservationItemActions}>
                <button className={styles.buttonAcceptionStyle}>Aceitar</button>
                <button className={styles.buttonRejectStyle}>Rejeitar</button>
            </div>
        </div>
    );
}