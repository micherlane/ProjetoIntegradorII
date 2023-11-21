"use client";

import { Header } from "../Components/Header";
import { ReservationList } from "./components/ReservationList";
import { ReservationNav } from "./components/ReservationNav";

export default function ReservationPage(){
    return(
        <>
            <Header/>
            <ReservationNav/>
            <ReservationList/>
        </>
    );
}