"use client";

import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { setupAPIClient } from "@/services/api";
import { useState } from "react";
import { ReservationModel } from "@/models/reservationModel";
import Head from "next/head";
import { ReservationDashboard } from "@/components/Reservation/components/ReservationDashboad";

export default function ReservationPersonalPage({ reservations }){
    const [reservationsList, setReservationList] = useState<ReservationModel[]>(reservations.map(reservation => ReservationModel.fromJSON(reservation)));

    const handleRefreshReservations = async () => {
        const apiClient = setupAPIClient();

        const reservations = (await apiClient.get('reservations/personal')).data;

        setReservationList(reservations.map(reservation => ReservationModel.fromJSON(reservation)));
    }

    return(
        <>
            <Head>
                <title>Minhas Reservas</title>
            </Head>
            <Header/>
            <ReservationDashboard reservations={reservationsList} handleRefreshReservations={handleRefreshReservations}/>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('reservations/personal');

    return {
        props: {
            reservations: response.data
        }
    }
});