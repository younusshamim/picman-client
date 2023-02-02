import React, { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AuthContext } from "../../../contexts/UserContext";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditReviewModal from "./EditReviewModal";

const Review = ({
  review,
  reviewDetails,
  setReviewDetails,
  handleEdit,
  handleDelete,
}) => {
  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://service-review-server-roan.vercel.app/services/${review.serviceId}`
    )
      .then((res) => res.json())
      .then((result) => {
        setService(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }

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
    <div className="flex gap-5 items-center mb-5 bg-base-200 p-5 rounded-lg">
      <img
        src={review.photoUrl}
        alt=""
        className="rounded-full w-20 h-20 object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{service.title}</h3>
        <hr className="my-3" />
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

      <EditReviewModal
        serviceId={review.serviceId}
        reviewDetails={reviewDetails}
        setReviewDetails={setReviewDetails}
        handleEdit={handleEdit}
      />

      <div className="flex gap-1">
        <label
          className="btn text-lg"
          htmlFor="edit-modal-3"
          onClick={() =>
            setReviewDetails({
              ...reviewDetails,
              id: review._id,
              serviceId: review.serviceId,
              name: review.name,
              email: review.email,
              rating: review.rating,
              photoUrl: review.photoUrl,
              reviewText: review.reviewText,
            })
          }
        >
          <AiFillEdit />
        </label>
        <button
          className="btn text-lg"
          onClick={() => handleDelete(review._id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Review;
