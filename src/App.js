import { useState } from "react";

const exchangeItems = [
  { id: 1, description: "Libro de ciencia ficción" },
  { id: 2, description: "Película de comedia" },
  { id: 3, description: "Juego de mesa estratégico" },
  { id: 4, description: "Camiseta de fútbol" },
  { id: 5, description: "Libro sobre fútbol" },
  { id: 5, description: "Entrada de teatro a una comedia" }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // MODIFICA la siguiente línea para actualizar el array de resultados con la palabra clave que el usuario ha escrito en 'searchTerm'
    // Tan solo es una línea de código usando adecuadamente el método filter y asignando su resultado a la variable 'results'
    let results = [];

    results = exchangeItems.filter((p) => p.description.includes(searchTerm));

    console.log(results);

    setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>Exchange Item Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by description"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
}
