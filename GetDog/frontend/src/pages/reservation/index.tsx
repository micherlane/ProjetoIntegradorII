"use client";

import { Header } from "@/components/Header";
import { ReservationDashboard } from "./components/ReservationDashboad";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { setupAPIClient } from "@/services/api";
import { useState } from "react";
import { ReservationModel } from "@/models/reservationModel";
import Head from "next/head";

export default function ReservationPage({ reservations }){
    const [reservationsList, setReservationList] = useState<ReservationModel[]>(reservations.map(reservation => ReservationModel.fromJSON(reservation)));

    return(
        <>
            <Head>
                <title>Minhas Reservas</title>
            </Head>
            <Header/>
            <ReservationDashboard reservations={reservationsList}/>
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