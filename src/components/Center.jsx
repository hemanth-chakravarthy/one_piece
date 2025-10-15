import React from "react";

export default function Center() {
  return (
    <div id="center">
      <div id="content">
        <video autoPlay muted loop src="public\Assets\Luffy Main .mp4"></video>
        <div id="overlay">
          <div id="over1">
            <h1 style={{ color: "black" }}>Monkey D. Luffy</h1>

            <h1 style={{ color: "black" }}>Gear 5</h1>
          </div>
          <div id="over2">
            <h4 style={{color: "black"}}>Powers</h4>
            <div id="img-wrap">
              <img src="./Assets/1.png" alt="" />
              <img src="./Assets/2.png" alt="" />
              <img src="./Assets/3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}