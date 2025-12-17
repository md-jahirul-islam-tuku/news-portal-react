import React from "react";
import { Link } from "react-router";

const NoNews = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {/* Icon */}
      <div className="text-6xl mb-4">📰</div>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        No news available
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        There are currently no news articles in <span className="font-bold text-md text-secondary">{title}</span>.
        Please check back later or explore other categories.
      </p>

      {/* Action */}
      <Link
        to="/category/0"
        className="btn btn-secondary shadow-none text-white"
      >
        Browse All News
      </Link>
    </div>
  );
};

export default NoNews;
