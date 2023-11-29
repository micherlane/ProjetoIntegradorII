import { ReservationModel } from "@/models/reservationModel";
import  ReservationList  from "../ReservationList";
import  ReservationNav  from "../ReservationNav";
import styles from './styles.module.css';

interface ReservationDashboadProps {
    reservations: ReservationModel[];
}
export default function ReservationDashboard({reservations}: ReservationDashboadProps){
    return (
        <div className={styles.reservationDashboardStyle}>
            <ReservationNav/>
            <ReservationList reservations={reservations}/>
        </div>
    )
}