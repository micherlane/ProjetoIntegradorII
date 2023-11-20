import Link from 'next/link';
import { ImageUser } from '../ImageUser';
import styles from './styles.module.css';
import { FiLogOut } from 'react-icons/fi';

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <div className={styles.headerLogo}>
                    <Link href="/HomePage">GetDog</Link>
                </div>

                <div className={styles.headerUserInfo}>

                    <div className={styles.headerUser}>

                        <ImageUser urlImage="http://localhost:3001/images/1699906205195.ai_image_history_62844.png" size={60}/>

                        <div className={styles.headerUserName}>
                            <p>Nome do Usuário</p>
                        </div>

                        <div className={styles.headerButtonLogOut}>

                            <button>
                                <FiLogOut color='#000' size={24}></FiLogOut>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}