import React from "react";
import "../css/carte.css"
function Carte() {
  const articlesInit = [
    { id: 1, nomA: "Bureau bois massif", prix: 2000, image: "/public/images/a.jpg" },
    { id: 2, nomA: "Cahier A4", prix: 30, image: "./public/images/cahiers.jpg" },
    { id: 3, nomA: "12 stylos", prix: 50, image: "/public/images/stylo.jpg" },
  ];
  return (
    <>
      <h2 style={{textAlign : "center"}}>Nos Article</h2>
      <div className="carts-container">
        {articlesInit.map(( article ,id) => (
          <div className="cart" key={article.id}>
            <img src={article.image} className="article-image" alt="article" width="250px"/>
            <h2>{article.nomA}</h2>
            <p>💰prix : {article.prix}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carte;
