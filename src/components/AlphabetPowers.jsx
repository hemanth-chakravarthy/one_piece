import React from "react";

export default function AlphabetPowers() {
  const powers = ["Gomu Gomu no Mi – Rubber Body",
    "Mera Mera no Mi – Flame Flame Fruit",
    "Ope Ope no Mi – Room Manipulation",
    "Yami Yami no Mi – Darkness Control",
    "Gura Gura no Mi – Earthquake Tremor",
    "Tori Tori no Mi, Model: Phoenix – Rebirth Flames",];
  return (
    <div id="alphabet">
      <h5>Powers</h5>
      {powers.map((power, i) => (
        <h6 key={i}>{power}</h6>
      ))}
    </div>
  );
}