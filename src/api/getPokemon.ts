export const getPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=60');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
