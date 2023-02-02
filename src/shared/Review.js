import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Review = ({ review }) => {
  const rating = review.rating;
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      arr.push("orange");
    } else {
      arr.push("gray");
    }
  }

  return (
    <div className="flex gap-5 items-center mb-8">
      <img
        src={review.photoUrl}
        alt=""
        className="rounded-full w-20 h-20 object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{review.name}</h3>
        <div className="flex gap-1">
          {arr.map((item) =>
            item === "orange" ? (
              <AiFillStar className="text-orange-400" />
            ) : (
              <AiOutlineStar />
            )
          )}
        </div>
        <p>{review.reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
