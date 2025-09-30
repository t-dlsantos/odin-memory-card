import "./style.css";

import { Champion } from "../Champion";

export function ChampionSelect({
  champions,
  handleChampionSelection,
  flippedAll,
  backHome
}) {
  return (
    <div>
      <div className="champion-select">
        {champions.map((champion) => (
          <Champion
            key={champion.id}
            champion={champion}
            flipped={flippedAll} // todos viram juntos
            onClick={handleChampionSelection}
          />
        ))}
      </div>
      <button className="back-home" onClick={backHome}>Back to Home</button>
    </div>
  );
}
