import React from "react";
import Header from "../components/Header/Header";

function About() {
  return (
    <div>
      <Header />
      <section className="aboutContainer">
        <img
          className="rocketLeft"
          src="/assets/rocket-angular-left.png"
          alt="rocket-left"
        />
        <h1>About</h1>
        <p>
          Bueno esta sección fue creada principalmente para aportar un pequeño
          extra al enrutado con NextJS, pero ya que estoy les hablo un poco de
          mi. Mi nombre es Jonathan, tengo 24 años y estoy en búsqueda de mi
          primer oportunidad laboral en el rubro IT. Espero que mi trabajo con
          este test les guste, lo hice con mucha emoción y dedicación para
          dejarlo lo más bonito y completo posible.
        </p>
        <span>
          Muchas gracias por la oportunidad y por tomarse el tiempo de ver el
          trabajo, espero les guste.
        </span>
        <img
          className="rocketRight"
          src="/assets/rocket-angular-right.png"
          alt="rocket-right"
        />
      </section>
    </div>
  );
}

export default About;
