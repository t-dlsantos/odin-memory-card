import "./App.css";
import { ChampionSelect } from "./components/ChampionSelect";
import { Header } from "./components/Header";
import { LevelSelection } from "./components/LevelSelection";

function App() {
  return (
    <div>
      <Header />
      <ChampionSelect />
      {/* <LevelSelection /> */}
    </div>
  );
}

export default App;
