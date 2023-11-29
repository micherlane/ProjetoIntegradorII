"use client";

import React from 'react';
import styles from "./styles.module.css";
import Modal from 'react-modal';

import { toast } from "react-toastify";
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { useState } from "react";
import { PostModel } from "@/models/postModel";
import { ImageUser } from "@/components/ImageUser";
import { formatDate, formatDateToLongString, formatTime } from "@/utils/dataUtils";
import { ModalReservationAdd } from "@/components/ModalReservationAdd";

interface PostItemProps {
    post: PostModel;
}

export default function PostItem({ post }: PostItemProps) {
    const urlImageAuthor = post.author.profile.profilePicture;

    const [modalVisible, setModalVisible] = useState(false);

    const maxImagesToShow = 1; 
    
    const [showAllImages, setShowAllImages] = useState(false);

    const imagesToRender = showAllImages ? post.photos : post.photos.slice(0, maxImagesToShow);

    const handleShowAllImages = () => {
        setShowAllImages(true);
    };

    const handleShowLessImages = () => {
        setShowAllImages(false);
    };

    const handleOpenModalView = () => {
        setModalVisible(true);
    }
    const handleCloseModalView = () => {
        setModalVisible(false);
    }
    const handleAddComment = () => {
        toast.success("Você clicou em adicionar comentário!");
    }

    const handleDoReservation = () => {
        handleOpenModalView();
    }

    Modal.setAppElement("#__next");

    return (
        <>
            <div className={styles.postItemContainer}>
                <div className={styles.postItemHeader}>
                    <div className={styles.postItemUser}>
                        <ImageUser urlImage={urlImageAuthor} size={50} />
                        <p>{post.author.name}</p>
                    </div>
                    <div>
                        {formatDateToLongString(new Date(post.createdAt))}
                    </div>
                </div>
                <div className={styles.postItemTitle}>
                    <h2>{post.title}</h2>
                </div>
                <div className={styles.postItemLegend}>
                    <p>{post.legend}</p>
                </div>

                <h3 className={styles.disponibilityTitle}>Datas Disponíveis</h3>

                <div className={styles.disponibilityStyle}>
                    {
                        post.disponiblity.map((disponibility: Date, index: number) => {
                            return (
                                <div className={styles.postItemDisponibility} key={index}>
                                    <div className={styles.postItemDisponibilityContent}>
                                        {`${formatDate(disponibility)}`}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>


                <div className={styles.postItemImage}>
                    {imagesToRender.map((photo: string, index: number) => {
                        const urlImage = `http://localhost:3001/images/${photo}`;
                        return <img src={urlImage} key={index} />;
                    })}
                    {!showAllImages && post.photos.length > maxImagesToShow && (
                        <button onClick={handleShowAllImages}>
                            Ver mais imagens ({post.photos.length - maxImagesToShow})
                        </button>
                    )}

                    {showAllImages && (
                        <button onClick={handleShowLessImages}>
                            Mostrar menos
                        </button>
                    )}
            </div>

            <div className={styles.postItemReaction}>
                    <div className={styles.postItemReactionNumber}>
                        <FaLongArrowAltUp color="#008000" />
                        <p>{post.likes}</p>
                    </div>
                    <div className={styles.postItemReactionNumber}>
                        <FaLongArrowAltDown color="#ff0000" />
                        <p>{post.unlikes}</p>
                    </div>
                    <div className={styles.postItemComment} onClick={handleAddComment}>
                        <p>
                            Escrever comentário...
                        </p>
                    </div>
                </div>
                <div className={styles.postItemReservation}>
                    <button onClick={handleDoReservation}>
                        Reservar Passeio
                    </button>
                </div>
            </div>
            {
                modalVisible && (
                    <ModalReservationAdd isOpen={modalVisible} onRequestClose={handleCloseModalView} post={post}/>
                )
            }
        </>
    )
}