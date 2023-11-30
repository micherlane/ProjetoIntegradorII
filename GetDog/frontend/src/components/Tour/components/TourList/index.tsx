import { TourModel } from '@/models/toursModel';
import styles from './styles.module.css';
import { TourItem } from '../TourItem';

interface TuorListProps {
    tours: TourModel[];
}

export function TourList({tours} : TuorListProps){
    return (
        <div className={styles.tuorStyleContainer}>
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