import "./style.css";

import { GameStats } from "../GameStats";

export function Header({ score }) {
  return (
    <div className="header">
      <GameStats score={score} />
      <div>
        <h1>MEMO LEGENDS</h1>
        <p>Get points by clicking on a champion that wasn't present before</p>
      </div>
    </div>
  );
}
