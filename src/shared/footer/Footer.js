import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-20 py-20 bg-gray-900 text-white rounded-t-xl text-center shadow-xl">
      <h2 className="font-semibold text-lg mb-3">Follow Me</h2>

      <div className="flex gap-2 text-3xl justify-center">
        <AiFillFacebook className="cursor-pointer" />
        <AiFillTwitterSquare className="cursor-pointer" />
        <AiOutlineInstagram className="cursor-pointer" />
        <AiFillLinkedin className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
