import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";

const Article = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto pb-10">
      <h2 className="font-[Alegreya] text-center font-semibold text-3xl text-gray-700 py-4">
        Our Articles
      </h2>

      {/* articles */}
      <div className="grid grid-cols-1 gap-8 my-10">
        <ArticleCard />
        <ArticleCard2 />
      </div>

      {/* articles end */}
    </div>
  );
};

export default Article;
