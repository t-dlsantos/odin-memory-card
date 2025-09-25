import "./style.css";

import { Champion } from "../Champion";

export function ChampionSelect() {
  function handleSelection() {
    console.log("oi");
  }

  return (
    <div className="champion-select">
      <Champion onClick={handleSelection} />
      <Champion onClick={handleSelection} />
      <Champion onClick={handleSelection} />
    </div>
  );
}
