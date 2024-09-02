import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function Search() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };
  const filtered = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(products);

    return (
        <div className="container mx-auto bg-black text-gray-300 min-h-screen p-4">
          <input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-600 rounded w-full mx-auto my-4 bg-gray-800 text-gray-300 placeholder-gray-500"
          />
          <div className="space-y-4">
            {filtered.map((data) => (
              <Link
                to={`/Search/${data.title.split(" ").join("-")}/id/${data.id}`}
                key={data.id}
              >
                <Heading id={data.id} title={data.title} />
              </Link>
            ))}
          </div>
        </div>
  );
}

export default Search;