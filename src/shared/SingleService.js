import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  return (
    <div
      key={service._id}
      className="relative bg-black rounded-xl hover:scale-105 ease-out duration-200 cursor-pointer shadow-xl"
    >
      <img
        src={service.coverImg}
        alt={service.title}
        className="rounded-xl opacity-60 w-full h-72 object-cover"
      />
      <h2 className="text-lg absolute top-2/4 text-white font-bold text-center w-full tracking-wider uppercase">
        {service.title}
      </h2>
    </div>
  );
};

export default SingleService;
