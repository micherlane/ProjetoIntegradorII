"use client";

import styles from "./styles.module.css";
import { toast } from "react-toastify";

import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { useState } from "react";
import { PostModel } from "@/models/postModel";
import { ImageUser } from "@/components/ImageUser";
import { formatDate, formatDateToLongString, formatTime } from "@/utils/dataUtils";

interface PostItemProps {
    post: PostModel;
}

export function PostItem({ post }: PostItemProps) {
    const urlImageAuthor = `http://localhost:3001/images/${post.author.profile.profilePicture}`
    const handleAddComment = () => {
        toast.success("Você clicou em adicionar comentário!");
    }

    const handleDoReservation = () => {
        toast.success("Você cliclou em reservar postagem!");
    }

    return (
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

            <h3 className={styles.disponibilityTitle}>Horários Disponíveis</h3>

            <div className={styles.disponibilityStyle}>
            {
                post.disponiblity.map((disponibility: Date, index: number) => {
                    return (
                    <div className={styles.postItemDisponibility} key={index}>
                        <div className={styles.postItemDisponibilityContent}>
                        {`${formatDate(disponibility)} - ${formatTime(disponibility)}`}
                        </div>
                    </div>
                    );
                })
            }
            </div>


            <div className={styles.postItemImage}>
                {
                    post.photos.map((photo: string, index: number) => {
                        const urlImage = `http://localhost:3001/images/${photo}`;

                        return (
                            <img src={urlImage} key={index} />
                        )
                    })
                }
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
                    Reservar
                </button>
            </div>
        </div>
    )
}