import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../api/getPokemon';

export const Home = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: getPokemon });

  if (!query?.data?.results?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-4xl font-bold mb-2">Pokémon List Manual styled</h1>
        <p className="text-lg text-gray-600">A list of Pokémon fetched from the PokéAPI</p>
      </div>
      <section className="pokemon-section">
        <div className="pokemon-container">
          <ul className="pokemon-card-container">
            {query.data.results.map((pokemon: { name: string; url: string }) => (
              <li key={pokemon.name} className="pokemon-card">
                <span className="font-semibold">{pokemon.name}</span> -{' '}
                <a href={pokemon.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="text-center my-4">
        <h1 className="text-4xl font-bold mb-2">Pokémon List tailwind</h1>
      </div>

      <section className="pokemon-section">
        <div className="pokemon-container">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {query.data.results.map((pokemon: { name: string; url: string }) => (
              <li key={pokemon.name}>
                <span className="font-semibold">{pokemon.name}</span> -{' '}
                <a href={pokemon.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
