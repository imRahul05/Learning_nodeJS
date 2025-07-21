import React, { useEffect, useState } from "react";
import { useDebounce } from "../customHooks/debounce";

const Home = () => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 1000);
  const [results, setResults] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  async function fetchData() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${debounceQuery}`
      );
      const data = await res.json();
      console.log(data.products);
      setResults(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (debounceQuery) {
      fetchData();
    }
  }, [debounceQuery]);
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <label>Type here to search ---</label>
        <input
          name="search"
          type="text"
          placeholder="enter here to search the data"
          value={query}
          size="40"
          onChange={handleChange}
        />
      </div>
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          debounceQuery && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
