import "./style.css";

export function Champion({ champion, onClick }) {
  return (
    <div className="champion-card" onClick={onClick}>
      <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}></img>
      <p className="champion-name">{champion.name}</p>
    </div>
  );
}
