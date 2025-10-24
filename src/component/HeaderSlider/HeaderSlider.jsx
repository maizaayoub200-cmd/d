import Band from "../Band/Band";
import pilljar from "../../assets/pilljar.png";
import "./HeaderSlider.css";
import { Flower2 } from 'lucide-react';

export default function () {
  return (
    <div className="slider-container">
      <div className="slider-text">
        <h2>"7 secrets de la nature au service du bien etre : Dr. bio 7 ."</h2>
        <p>
          Acteur de référence mondiale Dr. Bio 7 est leader dans la production
          de complément alimentaires d'origine 100% naturel sans additifs ni
          produits chimiques. Avec une production brevetée sur les normes
          internationales et certifiée en laboratoires.
        </p>
        <div className="band-intro">
          <Band text="Énergie et immunité" icon={<Flower2/>}/> <Band text="Vitalité  et mentale"/> <Band text="Endurance et libido"/> <Band /> <Band /> <Band/> <Band/>
        </div>{" "}
        <div className="end-btn">
          <button id="btn1">Consulter nos Conseils</button>
          <button id="btn2">Voir nos produits</button>
        </div>
      </div>

      <img src={pilljar} alt="logo" />
    </div>
  );
}
