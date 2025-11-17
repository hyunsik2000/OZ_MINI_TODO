import { useState } from "react";
import MOTIVES from "../data/motive";
import "../style/motive.css";

export default function Motive() {
  const [motive, setMotive] = useState("오늘의 명언");

  const getMotive = () => {
    const randomIndex = Math.round(Math.random() * MOTIVES.length);
    const randomContent = MOTIVES[randomIndex].text;
    setMotive(randomContent);
  };

  return (
    <>
      <button className="motive-btn" onClick={getMotive}>
        명언 생성하기
      </button>
      <p className="motive-sentence">{motive}</p>
    </>
  );
}
