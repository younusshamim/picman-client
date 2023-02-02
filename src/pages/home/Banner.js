import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./Home.css";

const Banner = () => {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Weeding Photography",
      desc: "Ancillae torquatos in nec, impetus nostrum ea eos.",
    },
    {
      id: 2,
      img: "https://cliffchoongphotography.com/wp-content/uploads/2020/03/Stella-Family-Portrait-0035.jpg",
      title: "Casual Photography",
      desc: "Ancillae torquatos in nec, impetus nostrum ea eos.",
    },
    {
      id: 3,
      img: "https://images.squarespace-cdn.com/content/v1/5d4c6077a7991a0001837faa/1649280845336-P6Q1GSBSH5EMKWBGGZWB/KMCPHAIL13539-Edit.jpg?format=1500w",
      title: "Holiday Photography",
      desc: "Ancillae torquatos in nec, impetus nostrum ea eos.",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Travel Photography",
      desc: "Ancillae torquatos in nec, impetus nostrum ea eos.",
    },
  ];

  return (
    <div className="mt-5 mb-10 shadow-xl">
      <Swiper
        className="mySwiper rounded-xl"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative cursor-pointer rounded-xl shadow-xl"
          >
            <div className="bg-black rounded-xl shadow-xl">
              <img
                src={item.img}
                alt=""
                className="w-full object-cover bannerImg opacity-40 rounded-xl shadow-xl"
              />

              <div className="absolute top-1/3 text-white text-center w-full">
                <h1 className="text-6xl font-bold mb-5">{item.title}</h1>
                <h1 className="text-xl font-semibold">{item.desc}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
