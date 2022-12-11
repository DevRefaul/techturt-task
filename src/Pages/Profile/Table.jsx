import React from "react";
import walletPng from "../../Assets/turtcoins wallet.png";

const Table = () => {
  return (
    <>
      <h2 className="font-[Alegreya] text-3xl font-bold text-center mb-6">
        Your Turt Coins History
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8">
        {/* turt coins */}
        <div className="md:flex justify-center items-center">
          <img src={walletPng} alt="" className="w-16 h-16 mx-auto md:mx-0" />
          <p className="text-xl font-medium text-[#FF3434] ml-3 mt-4 text-center">
            Available Turt Coins <span className="text-green-400">(87)</span>
          </p>
        </div>
        {/* table */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Reason
                </th>
                <th scope="col" className="py-3 px-6">
                  Coins Earned
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  01/05/2022
                </th>
                <td className="py-4 px-6">Python Article</td>
                <td className="py-4 px-6">40</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  01/010/2022
                </th>
                <td className="py-4 px-6">JavaScript Article</td>
                <td className="py-4 px-6">32</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  01/12/2022
                </th>
                <td className="py-4 px-6">PHP Article</td>
                <td className="py-4 px-6">15</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table */}
      </div>
    </>
  );
};

export default Table;
