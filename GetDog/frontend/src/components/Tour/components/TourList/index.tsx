import { TourModel } from '@/models/toursModel';
import styles from './styles.module.css';
import { TuorItem } from '../TourItem';

interface TuorListProps {
    tuors: TourModel[];
}

export function TuorList({tuors} : TuorListProps){
    return (
        <div className={styles.tuorStyleContainer}>
            <div className={styles.tuorListStyle}>
                {
                tuors.length !== 0? 
                    tuors.map((tuor, index) => {
                        return (
                            <TuorItem tuor={tuor} key={index}/>
                        );
                    }): 
                <p>Não há passeios agendados.</p>
                }
                
            </div>
        </div>
    );
}