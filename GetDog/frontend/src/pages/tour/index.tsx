import { Header } from "@/components/Header";
import { TuorItem } from "@/components/Tour/components/TourItem";
import { TourModel } from "@/models/toursModel";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { useState } from "react";

export default function Tour({ tours }){

    const [toursList, ] = useState<TourModel[]>(tours.map(tour => TourModel.fromJSON(tour)));
    
    return (
        <>
          <Head>
            <title>Passeios</title>
          </Head>
          <Header/>

          <TuorItem tuor={toursList[0]}/>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/tours');

  return {
    props: {
      tours: response.data
    }
  }
});