import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";

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
    <div className="card bg-base-100 shadow-sm mb-5">
      <div className="bg-neutral flex justify-between items-center px-5 py-3 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img className="rounded-full w-14" src={author.img} alt="" />
          <div>
            <h4 className="text-xl font-bold text-secondary">{author.name}</h4>
            <p className="text-primary">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-4xl">
          <FiBookmark />
          <IoMdShare />
        </div>
      </div>
      <h2 className="card-title text-2xl p-5">{title}</h2>
      <figure className="px-5">
        <img
          className="w-full rounded-lg"
          src={image_url}
          alt={`News_Image${title}`}
        />
      </figure>
      <div className="card-body">
        <p>{details}</p>
        <hr className="border-neutral border-2 border-dashed my-2" />
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <h4 className="text-lg">{rating.number}</h4>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <FaEye />
            <h3>{total_view}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
