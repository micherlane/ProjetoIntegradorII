import { ReservationModel } from "@/models/reservationModel";
import  {ReservationList}  from "../ReservationList";
import  {ReservationNav}  from "../ReservationNav";
import styles from './styles.module.css';

interface ReservationDashboadProps {
    reservations: ReservationModel[];
    handleRefreshReservations: () => Promise<void>;
}
export function ReservationDashboard({reservations, handleRefreshReservations}: ReservationDashboadProps){
    return (
        <div className={styles.reservationDashboardStyle}>
            <ReservationNav/>
            <ReservationList reservations={reservations} handleRefreshReservations={handleRefreshReservations}/>
        </div>
    )
}