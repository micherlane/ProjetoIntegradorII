import { TourModel } from '@/models/toursModel';
import { TourList } from '../TourList';
import styles from './styles.module.css';

interface TuorDashboardProps{
    tours: TourModel[];
    handleRefreshTours: () => Promise<void>;
}

export function TuorDashboard({ tours, handleRefreshTours }: TuorDashboardProps){
    return (
        <div className={styles.tourDashboardStyle}>
            <TourList tours={tours} handleRefreshTours={handleRefreshTours}/>
        </div>
    )
}