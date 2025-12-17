import React, { use } from "react";
import { CiCalendar } from "react-icons/ci";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const healthPromise = fetch("/news.json").then((res) => res.json());

const LeftSide = () => {
  const categories = use(categoryPromise);
  const health = use(healthPromise);
  const healthData = health.filter((item) => item.category_id === 4);
  return (
    <div className="col-span-3 mr-5 text-center">
      <h1 className="text-2xl text-secondary font-semibold mb-5">
        All Category
      </h1>
      <div className="space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="btn btn-ghost w-full justify-start text-left text-2xl font-normal"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="my-10 hidden lg:flex lg:flex-col">
        {healthData.map((item) => (
          <div className="bg-neutral mb-5 rounded-b-md">
            <img
              className="rounded-t-md w-full"
              src={item.image_url}
              alt="thumbnail_url"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold text-primary mt-2">
                {item.title}
              </h1>
              <div className="flex justify-between font-semibold my-3 items-center">
                <h1 className="text-gray-500">Health</h1>
                <p className="text-gray-400 flex items-center gap-1">
                  <CiCalendar className="mb-1" />
                  {item.author.published_date.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
