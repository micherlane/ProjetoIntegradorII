"use client";

import { Header } from "@/components/Header";
import { ReservationDashboard } from "./components/ReservationDashboad";

export default function ReservationPage(){
    return(
        <>
            <Header/>
            <ReservationDashboard/>
        </>
    );
}