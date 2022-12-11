import React from "react";
import { Link } from "react-router-dom";
import pythonImg from "../../Assets/memory-python.png";

const FirstArticle = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-8 md:py-16">
      {/* title */}
      <h2 className="text-2xl md:text-4xl font-semibold font-[Alegreya] mb-6">
        Getting system load in percentage using python
      </h2>
      {/* posted date */}
      <p className="mb-3 font-medium text-red-500 dark:text-gray-400">
        Published By TechTurt official on 12/7/2022
      </p>
      {/* posted date */}

      {/* article image */}
      <img src={pythonImg} alt="" className="md:h-72 m-6 lg:float-left" />
      {/* article image */}

      {/* solution */}
      <p className="my-8">
        Hi there 👋, <br /> Today we will see how we can find how loaded (or
        busy) our system is using python3, so let's get started 🚀 <br />
        <br />
        There is a python library called psutil which is used widely for
        retrieving information on running processes and system utilization (CPU,
        memory, disks, network, sensors) in Python. Explaining the whole library
        is not possible in a single article but for now, we will explain a few
        functions of it like cpu_count() which can be used for getting available
        CPUs (either logically or Physically) on the system and getloadavg()
        which return average system load over last 1,5 and 15 minutes as tuples,
        The “load” represents the processes which are in a runnable state,
        either using the CPU or waiting to use the CPU (e.g. waiting for disk
        I/O). Basically, this article is dedicated to the getloadavg() function
        because it is responsible for providing information about system load
        but for converting the output of this function into percentage we will
        need the cpu_count() function.
      </p>
      <br />

      <p>
        Now Let's come to the main point of how we can use the getloadavg()
        function. <br />
        <br /> getloadavg() function doesn't take any argument it simply returns
        numbers in the output. The numbers returned only make sense if related
        to the number of CPU cores installed on the system. Suppose it returns
        some values and 6.78 is one of them then, 6.78 with 10 logical CPUs
        means that the system load was 67.8% percent over the last N minutes.
        Here is the script for using this function.
      </p>
      <pre className="bg-black text-white p-4 my-6 overflow-scroll">
        import psutil <br /> print([x / psutil.cpu_count() * 100 for x in
        psutil.getloadavg()])
      </pre>

      <p>
        After executing the above code I got [34.9365234375, 28.997802734375,
        25.445556640625] as output which would change when I rerun the code
        (output can be different for your case).
      </p>

      <p className="mt-4">Thanks for reading 😀 Happy Coding 🎉.</p>
      {/* solution */}

      {/* redirecting to articles page btn */}
      <Link to="/articles" className="mt-8 inline-block">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Read More Articles
          </span>
        </button>
      </Link>
    </div>
  );
};

export default FirstArticle;
