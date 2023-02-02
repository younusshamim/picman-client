import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initOrder = {
  serviceId: "",
  date: "",
  mobile: "",
  message: "",
};

const BookNowModal = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({ ...initOrder });

  useEffect(() => {
    fetch(`https://service-review-server-roan.vercel.app/services`)
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch(`https://service-review-server-roan.vercel.app/orders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...order,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info("Submitted !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        document.getElementById("order-modal").checked = false;
        form.reset();
      });
  };

  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative py-10">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {user ? (
            <form
              className="h-full w-full flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-bold mb-2">Book Now</h2>

              <select
                className="select w-full border-gray-200"
                name="rating"
                value={order.serviceId}
                onChange={(e) =>
                  setOrder({ ...order, serviceId: e.target.value })
                }
                required
              >
                <option disabled selected>
                  Select Service
                </option>
                {services?.map((item) => (
                  <option value={item?._id} key={item._id}>
                    {item?.title}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="photoUrl"
                placeholder="Photo URL"
                className="input w-full border-gray-200"
                value={order.date}
                onChange={(e) => setOrder({ ...order, date: e.target.value })}
              />

              <input
                type="number"
                name="photoUrl"
                placeholder="Your Mobile"
                className="input w-full border-gray-200"
                required
                value={order.mobile}
                onChange={(e) => setOrder({ ...order, mobile: e.target.value })}
              />

              <textarea
                name="reviewText"
                className="textarea w-full h-32 border-gray-200"
                placeholder="Write Your Message"
                value={order.message}
                onChange={(e) =>
                  setOrder({ ...order, message: e.target.value })
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
                to Place Order.
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
