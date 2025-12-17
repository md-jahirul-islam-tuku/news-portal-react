import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const LeftSide = () => {
  const categories = use(categoryPromise);
  return (
    <div className="col-span-3 mr-5">
      <h1 className="text-2xl text-secondary font-semibold mb-5">
        All Category
      </h1>
      <div className="flex flex-col space-y-2">
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
    </div>
  );
};

export default LeftSide;
