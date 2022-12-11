import React from "react";
// import logo from "../../Assets/logo.png";

const Aboutus = () => {
  return (
    <div className="py-10 bg-slate-100">
      <h2 className="text-3xl font-semibold text-center  font-[Alegreya]">
        About <span className="font-extrabold text-[#FF3434]">TECKTURT</span>
      </h2>
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10">
        <div>
          {/* <img src={logo} alt="" /> */}
          <q className="text-4xl font-medium ">
            There are two ways of spreading light: to be the candle or the
            mirror that reflects it.
          </q>
          <br />
          <br />
          <p>
            We believe in this quote by{" "}
            <span className="text-[#FF3434] font-bold">Edith Wharton-</span>
          </p>
        </div>
        <div>
          <p>
            TECKTURT is a platform that is developed to provide its users with a
            friendly environment for exploring the technical world through our
            articles we value your time that's why we consider adhering to the
            topic. You can explore articles regarding software development,
            cloud service cost reduction strategies, common errors that occurred
            while development, best practices for project development, and
            System safety strategies.
          </p>
          <br />
          <p>
            Technology is the way that can make us smarter and our nation
            stronger, it can change your life up to that extent you never
            assumed if you have a good grasp on it.
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
