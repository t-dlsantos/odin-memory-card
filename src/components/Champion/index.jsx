import "./style.css";

export function Champion({ champion, onClick, flipped }) {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => onClick(champion)}
    >
      <div className="card-inner">
        <div className="champion-card">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
            alt={champion.name}
          />
          <p className="champion-name">{champion.name}</p>
        </div>

        <div className="card-back">
          <p>Memo Legends</p>
        </div>
      </div>
    </div>
  );
}
