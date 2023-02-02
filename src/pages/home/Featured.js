import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";

const Featured = () => {
  const items = [
    {
      id: 1,
      icon: <BsFillCameraFill />,
      title: "Latest Gadgets & Gear",
      desc: "Voluptate velit esse cillum dol ulla consequa re dolor in reprehenderit in volu pt ate velit esse ceufon",
    },
    {
      id: 2,
      icon: <HiOutlinePhoto />,
      title: "Latest Gadgets & Gear",
      desc: "Voluptate velit esse cillum dol ulla consequa re dolor in reprehenderit in volu pt ate velit esse ceufon",
    },
    {
      id: 3,
      icon: <FaAward />,
      title: "Latest Gadgets & Gear",
      desc: "Voluptate velit esse cillum dol ulla consequa re dolor in reprehenderit in volu pt ate velit esse ceufon",
    },
  ];

  return (
    <div className="py-10 flex gap-10">
      {items.map((item) => (
        <div className="bg-base-200 p-10 rounded-xl shadow-xl" key={item.id}>
          <div className="text-6xl mb-2">{item.icon}</div>
          <h2 className="font-bold text-xl mb-3">{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Featured;
