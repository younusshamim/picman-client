import React, { useContext, useEffect, useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Review from "../../shared/Review";
import ReviewModal from "../../shared/ReviewModal";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import BookNowModal from "../../shared/BookNowModal";
import { ToastContainer } from "react-toastify";

const initReviewDetails = {
  name: "",
  rating: "5",
  photoUrl: "",
  reviewText: "",
};

const Service = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [revLoading, setRevLoading] = useState(true);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [reviewDetails, setReviewDetails] = useState({ ...initReviewDetails });

  useEffect(() => {
    fetch(`https://service-review-server-roan.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setService(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    fetch(
      `https://service-review-server-roan.vercel.app/reviewsByServiceId/${id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
        setRevLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setRevLoading(false);
      });
  }, []);

  const addReview = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch(`https://service-review-server-roan.vercel.app/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        serviceId: id,
        email: user.email,
        ...reviewDetails,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([
          ...reviews,
          { serviceId: id, email: user.email, ...reviewDetails },
        ]);
        document.getElementById("my-modal-3").checked = false;
        form.reset();
      });
  };

  document.title = "Service | Picman";

  if (loading || revLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="mt-10">
      <div className="bg-base-200 rounded-xl p-14">
        <div className="w-full text-center ">
          <h2 className="  font-bold tracking-wider uppercase text-5xl">
            {service.title}
          </h2>
          <p>{service.desc}</p>
        </div>
      </div>

      <div className="my-10">
        <PhotoProvider>
          <div className="grid grid-cols-3 ">
            {service.images?.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img
                  src={item}
                  alt=""
                  className="h-60 w-full object-cover cursor-pointer hover:scale-95 ease-out duration-200"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>

      <div className="my-10 flex bg-red-200 rounded-xl text-xl justify-around items-center">
        <div className=" p-10 mr-10">
          <div className="flex gap-5 items-center font-semibold">
            <h3 className="">6 Hours Duration</h3>
          </div>
          <div className="flex gap-5 items-center font-semibold">
            <h3 className="">100 personal photograph</h3>
          </div>
          <div className="flex gap-5 items-center font-semibold">
            <h3 className="">Price $500</h3>
          </div>
        </div>

        <BookNowModal />
        <ToastContainer />
        <label htmlFor="order-modal" className="btn">
          Book Now
        </label>
      </div>

      <ReviewModal
        serviceId={id}
        initReviewDetails={initReviewDetails}
        reviewDetails={reviewDetails}
        setReviewDetails={setReviewDetails}
        addReview={addReview}
      />

      <div className="bg-base-200 p-10 rounded-lg">
        {/* <h3 className="font-semibold mb-2">
          <span className="text-5xl">4.2</span>
          <span className="text-3xl text-gray-500">/5</span>
        </h3>
        <div className="flex gap-1 text-xl mb-1">
          <AiFillStar className="text-orange-400" />
          <AiFillStar className="text-orange-400" />
          <AiFillStar className="text-orange-400" />
          <AiOutlineStar />
          <AiOutlineStar />
        </div> */}
        <small>{reviews.length} Ratings</small>

        {reviews?.every((item) => item.email !== user?.email) && (
          <label htmlFor="my-modal-3" className="btn btn-link">
            Write a review?
          </label>
        )}

        <hr className="my-5" />

        {reviews.map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Service;
