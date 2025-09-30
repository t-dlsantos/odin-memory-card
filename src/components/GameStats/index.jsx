import "./style.css";

export function GameStats({ score }) {
  return (
    <div className="game-stats">
      <p>Score: {score}</p>
      <p>Best score: 0</p>
    </div>
  );
}
