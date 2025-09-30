import "./App.css";
import { ChampionSelect } from "./components/ChampionSelect";
import { Header } from "./components/Header";
import { LevelSelection } from "./components/LevelSelection";
import { useGameController } from "./hooks/useGameController";

function App() {
  const {
    isSelectingLevel,
    levels,
    handleLevelSelection,
    champions,
    handleChampionSelection,
    score,
    flippedAll,
  } = useGameController();

  return (
    <div>
      <Header score={score} />
      {isSelectingLevel ? (
        <LevelSelection
          levels={levels}
          handleLevelSelection={handleLevelSelection}
        />
      ) : (
        <ChampionSelect
          champions={champions}
          handleChampionSelection={handleChampionSelection}
          flippedAll={flippedAll}
        />
      )}
    </div>
  );
}

export default App;
