import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../Assets/hero.png";
import ArticleCard from "../Article/ArticleCard";
import ArticleCard2 from "../Article/ArticleCard2";
import Aboutus from "./Aboutus";

const Home = () => {
  return (
    <div className="my-12">
      {/* hero section */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
        {/* hero texts */}
        <div>
          <p className="text-xl font-medium">Welcome To</p>
          <h2 className="text-6xl font-extrabold text-[#FF3434] py-4 font-[Alegreya]">
            TECKTURT
          </h2>
          <h4 className="text-2xl font-semibold">
            The Leading Technical Article <br /> Publisher In India
          </h4>
        </div>

        {/* hero image */}
        <div className="flex justify-center">
          <img src={heroImg} alt="" className="lg:w-2/3" />
        </div>
      </section>
      {/* hero section */}
      {/* about section */}
      <Aboutus />
      {/* about section */}

      {/* recent blogs page */}
      <section className="w-[90%] md:w-[80%] mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center font-[Alegreya]">
          Read Our Recent Blogs
        </h2>

        <div>
          {/* articles container */}
          <div className="grid grid-cols-1 gap-8 my-10">
            <ArticleCard />
            <ArticleCard2 />
          </div>
          {/* articles container */}
          {/* link to article page */}
          <div className="flex justify-center">
            <Link
              to="/articles"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Read More Articles
            </Link>
          </div>
          {/* link to article page */}
        </div>
      </section>
      {/* recent blogs page */}
    </div>
  );
};

export default Home;
