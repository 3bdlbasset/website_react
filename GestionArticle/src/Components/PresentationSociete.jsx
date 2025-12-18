import React from "react";
import "../css/presentation.css"



function PresentationSociete() {
  return (
    <>
      <div className="text-image">
        <div className="text">
          <h2>Notre Societe</h2>
          <p>
            Bienvenue chez Nom deSosciete , leader dans la vente de forniture
            scolaire et de bureau . Nous offrons des produits de qualite pour
            repondre aux besions des etudiants et professionnels , notre
            engagement : qualite , fiabilite et satisfaction clienr.
          </p>
          <ul>
            <li>Fornitures scolaires</li>
            <li>Forniture de bureau</li>
            <li>Service client 24/7</li>
          </ul>
        </div>

        <div className="image">
          <img className="societe-img" src="./public/images/Fournitures-Scolaires.jpg" alt="img" />
        </div>
      </div>
    </>
  );
}

export default PresentationSociete;
