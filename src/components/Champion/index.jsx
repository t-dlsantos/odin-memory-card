import "./style.css";

export function Champion({ onClick }) {
  return (
    <div className="champion-card" onClick={onClick}>
      <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"></img>
      <p className="champion-name">Aatrox</p>
    </div>
  );
}
