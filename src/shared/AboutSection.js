import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BookNowModal from "./BookNowModal";

const AboutSection = () => {
  document.title = "Picman";

  return (
    <div className="p-20 mt-10 flex bg-base-200 rounded-xl shadow-xl">
      <div className="w-1/2">
        <h3 className="text-xl font-semibold mb-4 text-gray-600">
          Photographer by born
        </h3>
        <h1 className="text-3xl font-bold mb-3">
          My click creates history, be a part of that
        </h1>
        <p className="mb-5">
          Voluptate velit esse cillum dol ullamco laboris nisi ut aliquip ex ea
          commodo consequa re dolor in reprehenderit in volu ptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="mb-5">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <BookNowModal />
        <ToastContainer />
        <label htmlFor="order-modal" className="btn">
          Book Now
        </label>
      </div>

      <div className="w-1/2 flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
          alt=""
          className="rounded-full h-96 w-96 object-cover hover:scale-105 ease-out duration-300 "
        />
      </div>
    </div>
  );
};

export default AboutSection;
