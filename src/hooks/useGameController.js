import { useState } from "react";

import riot from "../services/riot";

const levels = [
  { label: "Easy", champions: 3 },
  { label: "Medium", champions: 4 },
  { label: "Hard", champions: 5 },
];

export function useGameController() {
  const [level, setLevel] = useState(null);
  const [allChampions, setAllChampions] = useState([]);
  const [champions, setChampions] = useState([]);
  const [previousChampions, setPreviousChampions] = useState([]);
  const [isSelectingLevel, setIsSelectingLevel] = useState(true);
  const [score, setScore] = useState(0);

  function getRandomChampion() {
    const index = Math.floor(Math.random() * (level.champions * 2 - 1) + 1);
    return allChampions[index];
  }

  function getRandomIndex() {
    return Math.floor(Math.random() * level.champions);
  }

  function shuffleCards() {
    let newChampion = getRandomChampion();
    while (champions.includes(newChampion)) {
      newChampion = getRandomChampion();
    }

    const index = getRandomIndex();

    const newCards = champions.map((champion, i) => {
      if (i === index) {
        return newChampion;
      } else {
        return champion;
      }
    });
    setChampions(newCards);
  }

  function handleChampionSelection(champion) {
    if (previousChampions == champions) {
      setPreviousChampions(champions);
      shuffleCards();
      return;
    }

    if (previousChampions.includes(champion)) {
      setScore(0);
    } else {
      setScore(score + 1);
    }
    setPreviousChampions(champions);
    shuffleCards();
  }

  function handleLevelSelection(level) {
    setIsSelectingLevel(false);
    setLevel(level);
    startGame(level.champions);
  }

  async function startGame(quantity) {
    const champs = await riot.getChampions(quantity * 2);
    setAllChampions(champs);
    setChampions(champs.slice(0, quantity));
    setPreviousChampions(champs.slice(0, quantity));
  }

  return {
    levels,
    handleLevelSelection,
    isSelectingLevel,
    champions,
    handleChampionSelection,
    score,
  };
}
