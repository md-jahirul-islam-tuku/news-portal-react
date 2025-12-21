import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/news.json");
        const data = await res.json();
        setLatestNews(data);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []); // 👈 run only once

  const filterLatestNews = latestNews.filter(
    (news) => news.others?.is_today_pick === true
  );

  return (
    <div className="flex items-center bg-neutral p-1 lg:p-4 mt-8">
      <h2 className="bg-accent px-3 lg:px-8 lg:py-2 lg:text-xl font-semibold text-white">
        Latest
      </h2>

      <Marquee speed={80} pauseOnHover gradient={false}>
        {filterLatestNews.map((news) => (
          <span
            key={news.id} // 👈 must include
            className="mx-6 lg:text-xl font-semibold"
          >
            🚨 {news.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
