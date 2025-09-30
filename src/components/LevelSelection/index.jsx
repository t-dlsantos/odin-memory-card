import "./style.css";
import { Button } from "../Button";

export function LevelSelection({ levels, handleLevelSelection }) {

  return (
    <div className="level-selection">
      <p>First select a level:</p>
      <div className="level-selection-buttons">
        {levels.map((level) => (
          <Button
            key={level.champions}
            text={level.label}
            onClick={() => handleLevelSelection(level)}
          />
        ))}
      </div>
    </div>
  );
}
