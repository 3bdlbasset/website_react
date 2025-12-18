import React from "react";

function Map() {

  
  return (
    <>
      <div  style={{ width: "100%", height: "400px" , border : "2px solid black" , borderRadius : "30px" , marginTop : "1.3rem"}}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.129707743076!2d-8.046402698597731!3d31.624056276341857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe934d23cf64f%3A0x6d002ebf12a6a0ec!2sISGI%20%3A%20Institut%20Sp%C3%A9cialis%C3%A9%20de%20Gestion%20et%20d&#39;Informatique_Marrakech!5e1!3m2!1sfr!2sma!4v1764330887673!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style={{border:0 , borderRadius : "30px"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </>
  );
}

export default Map;
