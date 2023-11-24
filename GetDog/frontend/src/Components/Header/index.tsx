import Link from 'next/link';
import { ImageUser } from '../ImageUser';
import styles from './styles.module.css';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from '@/Providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

export function Header() {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
        }
    }, [user]);


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <div className={styles.headerLogo}>
                    <Link href="/HomePage">GetDog</Link>
                </div>

                <div className={styles.headerUserInfo}>

                    <div className={styles.headerUser}>

                        <ImageUser urlImage="http://localhost:3001/images/1699906205195.ai_image_history_62844.png" size={60} />

                        <div className={styles.headerUserName}>
                            <p>{name}</p>
                        </div>

                        <div className={styles.headerButtonLogOut}>

                            <button onClick={() => signOut()}>
                                <FiLogOut color='#000' size={24}></FiLogOut>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}