import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-neutral p-1 lg:p-4 mt-8">
      <h2 className="bg-accent px-3 lg:px-8 lg:py-2 lg:text-xl font-semibold text-white">
        Latest
      </h2>
      <Marquee speed={80} pauseOnHover gradient={false}>
        <span className="mx-6 lg:text-xl font-semibold">
          🚨 Authorities renew search for Brown University shooting suspect
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          📉 U.S. unemployment reaches highest level in four years
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          💼 Global job markets weaken, rate cut expectations rise
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          🌍 Western brands explore private equity partnerships in China
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          🧬 Scientists find polar bear DNA adapting to Arctic warming
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          ⚡ Tech stocks mixed as investors await inflation data
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          🏦 Central banks signal cautious approach to interest rates
        </span>
        <span className="mx-6 lg:text-xl font-semibold">
          🌐 Global markets steady amid economic uncertainty
        </span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
