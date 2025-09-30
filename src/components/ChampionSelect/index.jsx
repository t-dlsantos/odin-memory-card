import "./style.css";

import { Champion } from "../Champion";

export function ChampionSelect({ champions, handleChampionSelection }) {
  return (
    <div className="champion-select">
      {champions.map((champion) => (
        <Champion key={champion.key} onClick={() => handleChampionSelection(champion)} champion={champion} />
      ))}
    </div>
  );
}
