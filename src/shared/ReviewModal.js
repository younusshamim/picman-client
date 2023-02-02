import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const ReviewModal = ({ reviewDetails, setReviewDetails, addReview }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative py-10">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {user ? (
            <form
              className="h-full w-full flex flex-col gap-4"
              onSubmit={addReview}
            >
              <h2 className="text-xl font-bold mb-2">Write Review</h2>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input w-full border-gray-200"
                value={reviewDetails.name}
                onChange={(e) =>
                  setReviewDetails({ ...reviewDetails, name: e.target.value })
                }
              />

              <select
                className="select w-full border-gray-200"
                name="rating"
                value={reviewDetails.rating}
                onChange={(e) =>
                  setReviewDetails({ ...reviewDetails, rating: e.target.value })
                }
              >
                <option disabled selected>
                  Number of Rating
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input w-full border-gray-200"
                value={reviewDetails.photoUrl}
                onChange={(e) =>
                  setReviewDetails({
                    ...reviewDetails,
                    photoUrl: e.target.value,
                  })
                }
              />
              <textarea
                name="reviewText"
                className="textarea w-full h-32 border-gray-200"
                placeholder="Write a Review "
                value={reviewDetails.reviewText}
                onChange={(e) =>
                  setReviewDetails({
                    ...reviewDetails,
                    reviewText: e.target.value,
                  })
                }
              ></textarea>
              <input type="submit" value="Submit" className="btn w-full" />
            </form>
          ) : (
            <>
              <h1 className="text-xl">
                Please{" "}
                <Link
                  to="/login"
                  state={{ from: location }}
                  replace
                  className="underline text-blue-800"
                >
                  Login
                </Link>{" "}
                to add a review.
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
