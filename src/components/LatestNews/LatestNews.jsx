import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const categoriesRes = await fetch("../../../public/news.json");
        const categoriesData = await categoriesRes.json();
        setLatestNews(categoriesData);
      } catch {
        setError("Something went wrong");
      }
    })();
  }, [error]);
  const filterLatestNews = latestNews.filter(
    (news) => news.others.is_today_pick === true
  );
  return (
    <div className="flex items-center bg-neutral p-1 lg:p-4 mt-8">
      <h2 className="bg-accent px-3 lg:px-8 lg:py-2 lg:text-xl font-semibold text-white">
        Latest
      </h2>
      <Marquee speed={80} pauseOnHover gradient={false}>
        {
          filterLatestNews.map(news=><span className="mx-6 lg:text-xl font-semibold">
          🚨 {news.title}
        </span>)
        }
      </Marquee>
    </div>
  );
};

export default LatestNews;
