import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router";

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
          <img className="rounded-full w-14" src={author?.img} alt="" />
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
        <p>
          {details.slice(0, 250)}...{" "}
          <Link
            to={`/others/${id}`}
            className="text-accent underline"
          >
            Read More
          </Link>
        </p>
        <hr className="border-neutral border-2 border-dashed my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1>{"⭐".repeat(rating.number)}</h1>{" "}
            <h1 className="mt-0.5 text-lg font-semibold text-primary">
              {rating.number}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-2xl" />
            <h3 className="">{total_view}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
