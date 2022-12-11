import React from "react";
import userImg from "../../Assets/user.png";
import Table from "./Table";

const Profile = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-16">
      <h2 className="font-[Alegreya] text-center font-semibold text-3xl text-gray-700 pb-6">
        Welcome To Your Profile
      </h2>

      {/* profile details */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] justify-center gap-8">
        {/* about user */}
        <div className="md:flex justify-between items-center flex-row lg:block p-6  bg-gray-100 rounded-lg border border-gray-500">
          {/* user image */}
          <img
            src={userImg}
            alt=""
            className="w-36 mx-auto  border-[3px] p-1 border-[#FF3434] rounded-full my-6"
          />

          <div>
            <h2 className="text-xl font-semibold">Name : Yash Mathur</h2>
            <p className="text-base font-medium py-1">User ID : 1</p>
            <p className="text-base font-medium py-1">
              Email : yashmathur@gmail.com
            </p>
            <p className="text-base font-medium py-1">Contact : +1234567890</p>
            <p className="text-base font-medium py-1">
              Date of Birth : 01/01/1995
            </p>
          </div>

          {/* about user */}
        </div>

        {/* articles */}
        <div className="p-6  bg-gray-50 rounded-lg border border-gray-500">
          <h4 className="text-xl font-semibold text-center my-10">
            Your Articles
          </h4>

          <p className="text-lg font-semibold text-center my-10">
            Currently You Don't Have Any Articles
          </p>
          <div className="md:flex justify-center">
            <button
              type="button"
              className="w-full md:w-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Publish Article
            </button>

            {/* deleted articles btn */}
            <button className="w-full md:w-auto relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Show Discarded Articles
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* table section */}
      <section className="mt-10">
        <Table />
      </section>
    </div>
  );
};

export default Profile;
