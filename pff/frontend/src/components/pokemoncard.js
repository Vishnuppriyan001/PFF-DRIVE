import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
      <Link to={`/pokemon/${pokemon.id}`}>View Details</Link>
    </div>
  );
}

export default PokemonCard;
