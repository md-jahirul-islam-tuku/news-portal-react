import React from "react";

const CategoryNewsCard = ({ item }) => {
  const {
    id,
    title,
    category_id,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
    tags,
    others,
    production,
  } = item;
  return (
    <div className="card bg-base-100 shadow-sm">
      <h2 className="card-title">{title}</h2>
      <figure>
        <img src={image_url} alt={`News_Image${title}`} />
      </figure>
      <div className="card-body">
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
