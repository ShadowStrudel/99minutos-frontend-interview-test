import axios from "axios";
import { config } from "@/utils/request";
import { Rocket, Api } from "@/utils/interfaces/intefaces";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [infoApi, setInfoApi] = useState<Api>();
  const [rocketId, setRocketId] = useState<string>();

  const selectRocket = (id: string) => {
    setRocketId(id);
  };

  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setInfoApi(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let actualRocket =
    infoApi?.rockets.find((rocket) => rocket.id === rocketId) ||
    infoApi?.rockets[0];

  return (
    <>
      <Head>
        <title>Test 99minutos Front</title>
        <meta name="description" content="Test 99 minutos front end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <Header />
        <main className="mainContainer">
          <section className="upRightContainer">
            <img src="/assets/rocket-default.png" alt="rocket-default" />
            <h2>{actualRocket?.name}</h2>
            <p>{actualRocket?.description}</p>
            <a href={actualRocket?.wikipedia}>
              <button>View more</button>
            </a>
          </section>
          <section className="leftContainer">
            <h1>Last Rockets</h1>
            <div className="cardsContainer">
              {infoApi?.rockets.map((rocket) => (
                <Card
                  rocket={rocket}
                  selected={
                    rocketId ? rocket.id === rocketId : infoApi.rockets[0].id
                  }
                  selectRocket={selectRocket}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
