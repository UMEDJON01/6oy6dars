import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product1() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://api.example.com/products/" + id);

  if (isPending) {
    return (
      <div className="align-content">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="align-content">
        <h1 className="text-3xl">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="align-content">
      <h1 className="text-3xl">Product {id}</h1>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img src={images} alt={product.name} className="rounded-box" />
            </div>
            {product.images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img src={image} alt={product.name} className="rounded-box" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product1;
