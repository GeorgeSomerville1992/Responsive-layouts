import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../api/getPokemon';

export const Home = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: getPokemon });

  if (!query?.data?.results?.length) {
    return <div>Loading...</div>;
  }

  return (
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
  );
};
