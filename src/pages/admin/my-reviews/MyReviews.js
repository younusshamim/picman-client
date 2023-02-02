import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import Review from "./Review";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  // const { id } = useParams();
  const [reviewDetails, setReviewDetails] = useState({
    id: "",
    serviceId: "",
    name: "",
    email: "",
    rating: "5",
    photoUrl: "",
    reviewText: "",
  });

  useEffect(() => {
    fetch(
      `https://service-review-server-roan.vercel.app/reviewsByUser/${user.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch(
      `https://service-review-server-roan.vercel.app/reviews/${reviewDetails.id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: reviewDetails.name,
          rating: reviewDetails.rating,
          photoUrl: reviewDetails.photoUrl,
          reviewText: reviewDetails.reviewText,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter(
            (odr) => odr._id !== reviewDetails.id
          );
          const target = reviews.find((odr) => odr._id === reviewDetails.id);
          const targetNew = {
            ...target,
            name: reviewDetails.name,
            rating: reviewDetails.rating,
            photoUrl: reviewDetails.photoUrl,
            reviewText: reviewDetails.reviewText,
          };
          const newReviews = [targetNew, ...remaining];
          setReviews(newReviews);
        }
        document.getElementById("edit-modal-3").checked = false;
        form.reset();
      });
  };

  const handleDelete = (id) => {
    fetch(`https://service-review-server-roan.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = reviews.filter((rev) => rev._id !== id);
          setReviews(remaining);
        }
        alert("deleted successfully");
      });
  };

  document.title = "My Reviews | Picman";

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="my-10">
      {reviews.map((review) => (
        <Review
          review={review}
          key={review._id}
          reviewDetails={reviewDetails}
          setReviewDetails={setReviewDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default MyReviews;
