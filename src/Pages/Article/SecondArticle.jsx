import React from "react";
import { Link } from "react-router-dom";
import nodeImg from "../../Assets/nodejs.png";

const SecondArticle = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8 md:py-16">
      {/* title */}
      <h2 className="text-2xl md:text-4xl font-semibold font-[Alegreya] mb-6">
        Cookie is setting but getting an empty session at the server in nodejs
      </h2>
      {/* posted date */}
      <p className="mb-3 font-medium text-red-500 dark:text-gray-400">
        Published By TECKTURT official on 12/8/2022
      </p>
      {/* posted date */}

      {/* article image */}
      <img src={nodeImg} alt="" className="md:h-72 m-6 lg:float-left" />
      {/* article image */}

      {/* solution */}
      <p className="my-8">
        Hi there 👋, <br /> Today we will see how we can solve Cookie is setting
        but getting an empty session at the server in nodejs 🚀 <br />
        <br />
        Sometimes web developers face an issue where session cookies are set
        perfectly in the browser but when they try to call the API endpoint they
        receive an empty session object (even if they added some data previously
        in session). <br />
        <br /> Let's have a look at the solution to this problem. So simple and
        very straightforward solution to this problem is while calling the API
        endpoint pass an additional option called credentials (WithCredentials:
        true specifically in nodejs) That's it your problem will be fixed. Here
        is a script for doing so with Axios in nodejs.
      </p>
      <br />
      <pre className="bg-black text-white p-4 overflow-scroll">
        {`axios.post("http://localhost:5600/siteapi/user/updateUserDetails", {firstName: firstName,lastName: lastName,}, { withCredentials: true }).then((res) => {}).catch((res) => {})`}
      </pre>
      <br />
      <p>
        Note: if your session cookie is failing to set then you can check out
        this article.
      </p>
      <br />
      <p>Thanks for reading 😊 Happy coding 🎉.</p>
      {/* solution */}

      {/* redirecting to articles page btn */}
      <Link to="/articles" className="mt-8 inline-block">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Read More Articles
          </span>
        </button>
      </Link>
    </div>
  );
};

export default SecondArticle;
