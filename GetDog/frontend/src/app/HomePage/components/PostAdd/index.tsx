import { ImageUser } from '@/app/Components/ImageUser';
import styles from './styles.module.css';

export function PostAdd(){
    return (
        <div className={styles.postAddContainer}>
            <ImageUser urlImage='http://localhost:3001/images/1699906205195.ai_image_history_62844.png' size={50}/>
            <div className={styles.postWritterContainer}>
                <p>Escreva sua publicação...</p>
            </div>
        </div>
    );
}