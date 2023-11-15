import styles from './styles.module.css';

interface ImageUserProps {
    urlImage: string;
    size: number;
}

export function ImageUser({ urlImage, size } : ImageUserProps){

    return (
        <div className={styles.userImageContainer} style={{ width: `${size}px`, height: `${size}px` }}>
            <img src={urlImage} />
        </div>
    )

}