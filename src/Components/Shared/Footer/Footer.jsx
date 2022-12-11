import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import { MdHome, MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" dark:bg-gray-900 bg-slate-100 border-t">
      <footer className="p-4 sm:p-6 w-[90%] md:w-[80%] mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="mr-3 h-8" alt="FlowBite Logo" />
            </Link>
          </div>

          {/* navigations */}
          {/* quick links start */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/articles" className="hover:underline">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:underline">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            {/* quick links end */}

            {/* follow section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/yash-mathur-b348a01a5/"
                    className="hover:underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            {/* follow section */}

            {/* contact start */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  {" "}
                  <MdHome className="inline-block text-[20px]" /> Bengaluru,
                  India 560093, IN
                </li>
                <li>
                  <MdMarkEmailUnread className="inline-block text-[20px]" />{" "}
                  support@teckturt.co.in
                </li>
              </ul>
            </div>
            {/* contact start */}
          </div>
        </div>

        {/* bottom footer */}
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className=" text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              MD.Refaul Islam
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
