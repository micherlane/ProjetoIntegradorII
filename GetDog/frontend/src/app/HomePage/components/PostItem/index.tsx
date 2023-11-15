"use client";

import { ImageUser } from "@/app/Components/ImageUser";
import styles from "./styles.module.css";
import { toast } from "react-toastify";

import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

export function PostItem() {
    const handleAddComment = () => {
        toast.success("Você clicou em adicionar comentário!");
    }

    return (
        <div className={styles.postItemContainer}>
            <div className={styles.postItemHeader}>
                <div className={styles.postItemUser}>
                    <ImageUser urlImage='http://localhost:3001/images/1699906205195.ai_image_history_62844.png' size={50} />
                    <p>Nome do Usuário</p>
                </div>
                <div>
                    15 de novembro de 2023
                </div>
            </div>
            <div className={styles.postItemTitle}>
                <h2>Título</h2>
            </div>
            <div className={styles.postItemLegend}>
                <p>
                    Curabitur venenatis commodo semper. Vestibulum porta justo nec diam laoreet,
                    porttitor mollis leo gravida. Donec eu turpis sollicitudin, efficitur sapien in,
                    blandit ex. Curabitur accumsan tincidunt neque vel congue. Integer tincidunt erat magna,
                    sit amet tempor velit scelerisque nec. Sed sollicitudin gravida imperdiet. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultrices congue vehicula.
                    Sed efficitur vel ligula ornare interdum. Maecenas suscipit pellentesque sem, elementum rutrum metus malesuada
                    sit amet. Integer sed rhoncus erat. Sed efficitur, nisl quis iaculis varius, nisl justo efficitur magna,
                    et vehicula elit velit a neque. Pellentesque ultricies maximus urna, id consequat dolor mollis in. Nulla at
                    justo a velit interdum luctus in eget purus. Mauris interdum, odio sed mollis ultricies, neque odio venenatis
                    massa, quis molestie tortor justo id elit. Maecenas vehicula enim id tellus imperdiet, vel gravida arcu sagittis.
                </p>
            </div>
            <div className={styles.postItemImage}>
                <img src="http://localhost:3001/images/cachorro.jpeg" />
            </div>

            <div className={styles.postItemImage}>
                <img src="http://localhost:3001/images/cachorro2.jpeg" />
            </div>

            <div className={styles.postItemReaction}>
                <div className={styles.postItemReactionNumber}>
                    <FaLongArrowAltUp />
                    <p>10</p>
                </div>
                <div className={styles.postItemReactionNumber}>
                    <FaLongArrowAltDown />
                    <p>10</p>
                </div>
                <div className={styles.postItemComment} onClick={handleAddComment}>
                    <p>
                        Escrever comentário...
                    </p>
                </div>
            </div>
        </div>
    )
}