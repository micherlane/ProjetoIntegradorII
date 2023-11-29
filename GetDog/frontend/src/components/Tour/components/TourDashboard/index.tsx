import { TourModel } from '@/models/toursModel';
import { TourList } from '../TourList';
import styles from './styles.module.css';

interface TuorDashboardProps{
    tours: TourModel[];
}

export function TuorDashboard({ tours }: TuorDashboardProps){
    return (
        <div className={styles.tourDashboardStyle}>
            <TourList tours={tours}/>
        </div>
    )
}