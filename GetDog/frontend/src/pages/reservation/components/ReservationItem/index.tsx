"use client";

import { ReservationModel } from "@/models/reservationModel";
import styles from "./styles.module.css";
import Modal from 'react-modal';
import { ImageUser } from "@/components/ImageUser";
import { useState } from "react";
import { ModalReservationDetails } from "@/components/ModalReservationDetails";
import { STATUS_RESERVA } from "@/enums/status_reserva";
import Link from "next/link";
import { IoChatbubblesSharp } from "react-icons/io5";

interface ReservationItemProps {
    reservation: ReservationModel
}

export function ReservationItem({reservation}: ReservationItemProps){
    const [modalVisible, setModalVisible] = useState(false);
    const urlImage = reservation.user.profile?.profilePicture;
    const [status, setStatus] = useState<string>(STATUS_RESERVA[reservation.statusDogWalkReservation]);

    const handleStatus = (status: string) => {
        setStatus(status);
    }

    const handleReservationClick = () => {
        handleOpenModalView();
    }

    const handleOpenModalView = () =>{
        setModalVisible(true);
    }
    const handleCloseModalView = () => {
        setModalVisible(false);
    }

    Modal.setAppElement("#__next");

    return (
        <div className={styles.reservationContainer}>
            <div className={styles.reservationItemContainer} onClick={handleReservationClick}>
                <div className={styles.reservationItemUser}>
                    <ImageUser urlImage={urlImage} size={30}/>
                    <p>{reservation.user.name}</p>
                </div>
                <div className={styles.reservationItemDetails}>
                    <p className={styles.titleStyle}>{reservation.post.title}</p>
                    <p className={styles.addressStyle}>{reservation.address}</p>
                    <p className={styles.statusStyle}>{status}</p>
                    <div className={styles.chatStyle}>
                        <Link href="#"> <IoChatbubblesSharp size={25} color="#464646"/> <span>Chat</span></Link>
                    </div>
                </div>
                
            </div>
            {
                modalVisible && (
                    <ModalReservationDetails isOpen={modalVisible} reservation={reservation} onRequestClose={handleCloseModalView} handleStatus={handleStatus}/>
                )
            }
        </div>
    );
}