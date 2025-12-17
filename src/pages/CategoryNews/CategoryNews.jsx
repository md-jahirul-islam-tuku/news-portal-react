import React from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryNewsCard from "./CategoryNewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const news =
    id === "0" ? data : data.filter((news) => news.category_id === Number(id));
  return (
    <div className="col-span-6">
      <h1 className="text-2xl text-secondary font-semibold mb-5">
        Dragon News Home {news.length}
      </h1>
      <div>
        {news.map((item) => (
          <CategoryNewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
