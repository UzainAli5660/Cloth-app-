import { useEffect, useState } from "react";
import { useParams } from "react-router";
import End from "../Components/End";
function ProductDetails() {
  const { id, title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 pb-20">
  <div className="container mx-auto bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl flex-grow">
  
  <div className="container mx-auto bg-grey-800 p-6 rounded-lg shadow-lg max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-100 mb-4 text-center">{title}</h1>
      {product ? (
        <div className="flex flex-col md:flex-row items-center bg-gray-900 p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
          />
          <div className="md:ml-4 text-gray-300">
            <h1 className="text-2xl font-semibold text-gray-100 mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-gray-400 mb-3">
              {product.description}
            </p>
            <h2 className="text-xl font-medium text-gray-200 mb-2">
              Price: <span className="text-gray-100">${product.price}</span>
            </h2>
            <h2 className="text-xl font-medium text-gray-200">
              Rating: <span className="text-gray-100">{product.rating.rate}</span>
            </h2>
          </div>
        </div>
      ) : (
        <p className="text-gray-300 text-lg text-center">Loading product details...</p>
      )}
    </div>
  </div>
  <End />
</div>




  );
}

export default ProductDetails;
