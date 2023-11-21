"use client";

import { ImageUser } from "@/app/Components/ImageUser";
import styles from "./styles.module.css";

export function ReservationItem(){
    return (
        <div className={styles.reservationItemContainer}>
            <div className={styles.reservationItemUser}>
                <ImageUser urlImage="" size={30}/>
                <p>Nome do usuário</p>
            </div>
            <div className={styles.reservationItemDetails}>
                <p className={styles.titleStyle}>Divulgando meus serviços sobre os passeios com cachorros</p>
                <p className={styles.addressStyle}>Endereço</p>
                <p className={styles.statusStyle}>Status</p>
            </div>
            <div className={styles.reservationItemActions}>
                <button className={styles.buttonAcceptionStyle}>Aceitar</button>
                <button className={styles.buttonRejectStyle}>Rejeitar</button>
            </div>
        </div>
    );
}