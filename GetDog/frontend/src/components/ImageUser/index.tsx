import styles from './styles.module.css';

interface ImageUserProps {
    urlImage: string;
    size: number;
}

export function ImageUser({ urlImage, size } : ImageUserProps){
    const pathImage = urlImage !== null ? urlImage : 'user.png';
    const urlPath = `http://localhost:3001/images/${pathImage}`;
    return (
        <div className={styles.userImageContainer} style={{ width: `${size}px`, height: `${size}px` }}>
            <img src={urlPath} />
        </div>
    )

}