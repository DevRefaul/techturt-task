import React from "react";
import heroImg from "../../Assets/hero.png";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
        {/* hero texts */}
        <div>
          <p className="text-xl font-medium">Welcome To</p>
          <h2 className="text-6xl font-extrabold text-[#FF3434] py-4 font-[Alegreya]">
            TECHTURT
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
    </div>
  );
};

export default Home;
