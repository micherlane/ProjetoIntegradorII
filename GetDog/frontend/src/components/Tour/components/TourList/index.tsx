import { TourModel } from '@/models/toursModel';
import styles from './styles.module.css';
import { TourItem } from '../TourItem';
import { FiRefreshCcw } from 'react-icons/fi';

interface TuorListProps {
    tours: TourModel[];
    handleRefreshTours: () => Promise<void>;
}

export function TourList({tours, handleRefreshTours} : TuorListProps){
    return (
        <div className={styles.tuorStyleContainer}>
            <div className={styles.tourTitle}>
                <h2>Passeios</h2>
                <button onClick={handleRefreshTours}>
                    <FiRefreshCcw color="#464646" size={25}/>
                </button>
            </div>
            <div className={styles.tuorListStyle}>
                {
                tours.length !== 0? 
                    tours.map((tour, index) => {
                        return (
                            <TourItem tour={tour} key={index}/>
                        );
                    }): 
                <p>Não há passeios agendados.</p>
                }
                
            </div>
        </div>
    );
}