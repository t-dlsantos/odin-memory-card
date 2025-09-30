// champion_name + _0.jpg
const SPLASH_URL =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

function getRandomChampions(quantity, data) {
  let champions = [];
  for (let i = 0; i < quantity; i++) {
    const index = Math.floor(Math.random() * (data.length - 1) + 1);
    champions.push(data[index]);
  }

  return champions;
}

async function getChampions(quantity) {
  try {
    let champions = await fetch("/champions.json")
      .then((reponse) => reponse.json())
      .then((data) => Object.values(data.data));

    champions = getRandomChampions(quantity, champions);
    return champions;
  } catch (error) {
    console.error(error);
  }
}

export default { getChampions };
