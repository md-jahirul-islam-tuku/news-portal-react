import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "../../components/navigation/Navbar";
import Header from "../../components/header/Header";
import RightSide from "../home/RightSide";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const news = newsData.find((news) => news.id === id);
  const { title, details, image_url, category_id } = news;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="border border-primary-content rounded-lg bg-white overflow-hidden">
      {/* Image */}
      <img className="w-full h-66 object-cover p-5" src={image_url} />

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">{details}</p>

        {/* Button */}
        <Link
          to={`/category/${category_id}`}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded"
        >
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
