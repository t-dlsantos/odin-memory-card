import "./style.css";

import { GameStats } from "../GameStats";

export function Header() {
  return (
    <div className="header">
      <GameStats />
      <div>
        <h1>MEMO LEGENDS</h1>
        <p>Get points by clicking on a champion that wasn't present before</p>
      </div>
    </div>
  );
}
