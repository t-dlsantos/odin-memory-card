import "./style.css";
import { Button } from "../Button";

export function LevelSelection() {
  return (
    <div className="level-selection">
      <p>First select a level:</p>
      <div className="level-selection-buttons">
        <Button text="Easy" />
        <Button text="Medium" />
        <Button text="Hard" />
      </div>
    </div>
  );
}
