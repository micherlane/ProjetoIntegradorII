"use client";

import { Header } from "@/components/Header";
import { ReservationDashboard } from "./components/ReservationDashboad";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function ReservationPage(){
    return(
        <>
            <Header/>
            <ReservationDashboard/>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {
            
        }
    }
});