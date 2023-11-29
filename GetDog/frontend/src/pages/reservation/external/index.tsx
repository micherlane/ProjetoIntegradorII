import { Header } from "@/components/Header";
import { ReservationDashboard } from "@/components/Reservation/components/ReservationDashboad";
import { ReservationModel } from "@/models/reservationModel";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { useState } from "react";

export default function ReservationExternalPage({reservations}){
    const [reservationsList, setReservationList] = useState<ReservationModel[]>(reservations.map(reservation => ReservationModel.fromJSON(reservation)));
    return (
        <>
            <Head>
                <title>Reservas Solicitadas</title>
            </Head>
            <Header/>
            <ReservationDashboard reservations={reservationsList}/>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('reservations/external');

    return {
        props: {
            reservations: response.data
        }
    }
});