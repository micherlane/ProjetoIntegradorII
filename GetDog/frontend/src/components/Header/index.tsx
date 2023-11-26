import Link from 'next/link';
import { ImageUser } from '../ImageUser';
import styles from './styles.module.css';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from '@/Providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { IoChatbubblesSharp } from "react-icons/io5";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

export function Header() {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [urlUser, setUrlUser] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            const url = `http://localhost:3001/images/${user.profile.profilePicture}`;

            setUrlUser(url);
        }
    }, [user]);


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <div className={styles.headerLogo}>
                    <Link href="/home">GetDog</Link>
                </div>

                <div className={styles.navigationLinks}>
                    <Link href="/reservation"> <BiSolidCalendarEdit size={25} color="#464646"/> <span>Reservas</span></Link>
                    <Link href="#"> <IoChatbubblesSharp size={25} color="#464646"/> <span>Chat</span></Link>
                    <Link href="#"><FaUserFriends size={25} color="#464646"/> <span>Amigos</span></Link>
                </div>

                <div className={styles.headerUserInfo}>

                    <div className={styles.headerUser}>

                        <ImageUser urlImage={urlUser} size={60} />

                        <div className={styles.headerUserName}>
                            <p>{name}</p>
                        </div>

                        <div className={styles.headerButtonLogOut} onClick={() => signOut()}>

                            <button >
                                <div className={styles.iconLogOut}>
                                    <FiLogOut color='white' size={25}/>
                                </div>
                                <span>Sair</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}