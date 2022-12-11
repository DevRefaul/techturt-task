import React from "react";
import { Link } from "react-router-dom";
import nodeImg from "../../Assets/nodejs.png";

const ArticleCard2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] xl:grid-cols-[1fr,2fr] my-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-2 items-center gap-6">
        <img className="rounded h-56 mx-auto xl:mx-0" src={nodeImg} alt="" />

        <div className="p-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cookie is setting but getting an empty session at the server in
            nodejs
          </h5>
          {/* date */}
          <p className="mb-3 font-medium text-red-500 dark:text-gray-400">
            Published By TechTurt official on 12/8/2022
          </p>
          {/* content */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Sometimes web developers face an issue where session cookies are set
            perfectly in the browser but when they try to call the API
            endpoint...
          </p>

          {/* link btn */}
          <Link to="/articles/node">
            <button
              type="button"
              className="w-32 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Read More
            </button>
          </Link>
          {/* link btn */}
        </div>
      </div>
    </>
  );
};

export default ArticleCard2;

/* 

// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    
//         <img className="rounded-t-lg" src={nodeImg} alt="" />
    
//     <div className="p-5">
//        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             Getting memory stats of system using python
//           </h5>
//           {/* date */
//           <p className="mb-3 font-medium text-red-500 dark:text-gray-400">
//             Published By TechTurt official on 12/8/2022
//           </p>
//           {/* content */}
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             Hi there 👋, Today we will see how we can get statistics about the
//             RAM or system's memory - (like available space, used space, and a
//             lot more) using python3, so let's get started 🚀 ...
//           </p>

//           {/* link btn */}
//           <button
//             type="button"
//             className="w-32 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//           >
//             Read More
//           </button>
//     </div>
// </div>

// */
