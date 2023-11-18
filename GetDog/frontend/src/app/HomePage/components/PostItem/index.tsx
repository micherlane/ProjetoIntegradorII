"use client";

import { ImageUser } from "@/app/Components/ImageUser";
import styles from "./styles.module.css";
import { toast } from "react-toastify";

import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { PostModel } from "@/app/models/postModel";
import { formatDate, formatDateToLongString, formatTime } from "@/app/utils/dataUtils";

interface PostItemProps {
    post: PostModel
}

export function PostItem({ post }: PostItemProps) {
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
                    <ImageUser urlImage='http://localhost:3001/images/1699906205195.ai_image_history_62844.png' size={50} />
                    <p>Nome do Usuário</p>
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

            <h3>Disponibilidade</h3>

            <div className={styles.disponibilityStyle}>
                {
                    post.disponiblity.map((disponibility: Date, index: number) => {
                        return (
                            <div className={styles.postItemDisponibility} key={index}>
                                <div className={styles.postItemDisponibilityContent}>{formatDate(disponibility)}</div>
                                <div className={styles.postItemDisponibilityContent}>{formatTime(disponibility)}</div>
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