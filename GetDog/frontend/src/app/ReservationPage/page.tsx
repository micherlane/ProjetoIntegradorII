"use client";

import { Header } from "../Components/Header";
import { ReservationDashboard } from "./components/ReservationDashboad";

export default function ReservationPage(){
    return(
        <>
            <Header/>
            <ReservationDashboard/>
        </>
    );
}