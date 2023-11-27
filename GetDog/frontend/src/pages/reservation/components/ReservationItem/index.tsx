"use client";

import { ReservationModel } from "@/models/reservationModel";
import styles from "./styles.module.css";
import Modal from 'react-modal';
import { ImageUser } from "@/components/ImageUser";
import { useContext, useEffect, useState } from "react";
import { ModalReservationDetails } from "@/components/ModalReservationDetails";
import { AuthContext } from "@/contexts/AuthContext";

interface ReservationItemProps {
    reservation: ReservationModel
}

export function ReservationItem({reservation}: ReservationItemProps){
    const [modalVisible, setModalVisible] = useState(false);
    const urlImage = reservation.user.profile?.profilePicture;
    const [isOwnReservation, setIsOwnResrvation] = useState<boolean>();

    const {user} = useContext(AuthContext);

    useEffect(() => {
        if(user){
            setIsOwnResrvation(user.id === reservation.user.id);
        }
    }, [user]);

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
                    <p className={styles.statusStyle}>{reservation.statusDogWalkReservation}</p>
                </div>
                <div className={styles.reservationItemActions}>
                    {
                        isOwnReservation ? 
                            <button className={styles.buttonRejectStyle}>Cancelar</button>
                        : 
                        <>
                            <button className={styles.buttonAcceptionStyle}>Aceitar</button>
                            <button className={styles.buttonRejectStyle}>Rejeitar</button>
                        </>
                    }
                </div>
            </div>
            {
                modalVisible && (
                    <ModalReservationDetails isOpen={modalVisible} reservation={reservation} onRequestClose={handleCloseModalView}/>
                )
            }
        </div>
    );
}