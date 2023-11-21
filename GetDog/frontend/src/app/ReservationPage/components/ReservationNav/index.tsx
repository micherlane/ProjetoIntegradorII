import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

export function ReservationNav(){
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const hideMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className={styles.reservationNavContainer}>
            <IoMenu className={styles.toggleButton} onClick={toggleMenu} color="#ffffff" size={70}/>
            <div className={`${styles.reservationNavStyle} ${showMenu ? styles.showMenu : ''}`}>
                <Link href="#" onClick={hideMenu}>
                    MINHAS RESERVAS
                </Link>
                <Link href="#" onClick={hideMenu}>
                    RESERVAS SOLICITADAS
                </Link>
            </div>
        </div>
    );
}