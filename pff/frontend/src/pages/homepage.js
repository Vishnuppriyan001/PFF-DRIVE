import React, { useEffect, useState } from "react";
import { getPokemonList } from "../api";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPokemonList();
  }, [currentPage]);

  const fetchPokemonList = async () => {
    try {
      const response = await getPokemonList({ page: currentPage });
      setPokemonList(response.data.results);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching Pokémon list:", error);
    }
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default HomePage;
