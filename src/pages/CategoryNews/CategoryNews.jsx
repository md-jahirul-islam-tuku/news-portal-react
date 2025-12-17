import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryNewsCard from "./CategoryNewsCard";
import NoNews from "../NoNews/NoNews";

const CategoryNews = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const categoriesRes = await fetch("../../../public/categories.json");
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
      } catch {
        setError("Something went wrong");
        console.log(error);
      }
    })();
  }, [error]);

  const { id } = useParams();
  const data = useLoaderData();
  const categoriesTitle = categories.find((item) => item.id === Number(id));
  const news =
    id === "0" ? data : data.filter((news) => news.category_id === Number(id));
  return (
    <div className="col-span-6">
      <h1 className="text-2xl text-secondary font-semibold mb-5">
        {categoriesTitle?.name} ({news.length})
      </h1>
      <div className="">
        {news.length === 0 ? (
          <NoNews title={categoriesTitle?.name} />
        ) : (
          news.map((item) => <CategoryNewsCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default CategoryNews;
