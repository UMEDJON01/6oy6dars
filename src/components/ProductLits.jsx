import React from "react";

import { IoPricetagsOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <ul className="  grid  md:grid-cols-2 lg:grid-cols-3  gap-3 ">
      {products &&
        products.products.map((product) => (
          <li
            key={product.id}
            className="card card-compact  bg-base-100 shadow-xl"
          >
            <figure className="border-b-2   border-orange-300">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full  h-52 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="lign-clamp-3">{product.description}</p>
              <div className="card-actions justify-bet  items-center">
                <p className="text-2xl flex gap-1 items-center">
                  <IoPricetagsOutline />$ {product.price}
                </p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ProductList;
