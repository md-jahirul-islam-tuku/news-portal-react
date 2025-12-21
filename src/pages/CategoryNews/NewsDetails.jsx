import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router"; // Correct import
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  const newsData = useLoaderData() || [];

  // Find the news item safely
  const news = newsData.find((item) => item.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/categories.json");
        const data = await res.json();
        const foundCategory = data.find((c) => c.id == news?.category_id);
        setCategory(foundCategory || null);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };
    fetchCategories();
  }, [news]);

  if (!news) {
    return <p className="text-red-500">News not found.</p>;
  }

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">
        Category: {category?.name || "Unknown"}
      </h1>
      <div className="border border-primary-content rounded-lg bg-white overflow-hidden">
        {/* Image */}
        <img
          className="w-full h-66 object-cover p-5"
          src={news.image_url}
          alt={news.title}
        />

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            {news.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{news.details}</p>

          {/* Button */}
          <Link
            to={`/${news.category_id}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded"
          >
            <FaArrowLeft /> All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
