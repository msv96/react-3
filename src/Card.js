import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";

function Card({ data }) {
  let arr = [1, 2, 3, 4, 5];
  const [Rating, setRating] = useState(0);
  const [Hover, setHover] = useState(0);
  return (
    <div className="card">
      <img
        src="https://dummyimage.com/450x300/"
        alt="Product"
        className="image"
      />
      <h3>{data.productName}</h3>
      <p>$ {data.price}</p>
      <div>
        {arr.map((e) => {
          let ratingValue = e;
          return (
            <label>
              <input
                type="radio"
                name="ratings"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FontAwesomeIcon
                icon={faStar}
                color={ratingValue <= (Hover || Rating) ? "gold" : "lightgrey"}
                size="lg"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
      <button type="submit" className="btn" title="addicons" disabled={!data.inStock}>
        <span className="icon">
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
