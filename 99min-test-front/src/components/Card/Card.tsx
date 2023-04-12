import React from "react";
import { Rocket } from "@/utils/interfaces/intefaces";
import { validateType } from "@/utils/utils";

interface CardProps {
  rocket: Rocket;
  selected: boolean | string;
  selectRocket: (id: string) => void;
}

function Card({ rocket, selected, selectRocket }: CardProps) {
  const { name, active, success_rate_pct } = rocket;

  return (
    <div
      className={`cardContainer ${validateType(selected, rocket.id)}`}
      onClick={() => selectRocket(rocket.id)}
    >
      <img src="/assets/rocket-mini.png" alt="rocket-mini" />
      <div className="cardInfo">
        <h3>{name}</h3>
        <section>
          <p>
            Active:{" "}
            <span className={active ? "activeTrue" : "activeFalse"}>
              {active.toString()}
            </span>
          </p>
          <p>Seccess rate: {success_rate_pct}</p>
        </section>
      </div>
    </div>
  );
}

export default Card;
