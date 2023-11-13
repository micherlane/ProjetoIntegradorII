import styles from './styles.module.css';

interface ImageUserProps {
    urlImage: string;
}

export function ImageUser({ urlImage } : ImageUserProps){
    return (
        <div className={styles.userImageContainer}>
            <img src={urlImage}/>
        </div>
    )

}