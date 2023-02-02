import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const [newImg, setNewImg] = useState("");
  const [newImages, setNewImages] = useState([]);
  const [newService, setNewService] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(`https://service-review-server-roan.vercel.app/services`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...newService,
        images: newImages,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.info("Service Added!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
        setNewImg("");
        setNewImages([]);
      });
  };

  const handleImgAdd = (e) => {
    e.preventDefault();
    setNewImages((prev) => [...prev, newImg]);
    setNewImg("");
  };

  document.title = "Add Service | Picman";

  return (
    <div className="my-10 bg-base-200 p-10 rounded-lg">
      <ToastContainer />

      <form
        className="w-1/2 m-auto flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center mb-3 font-bold uppercase">
          Add New Service
        </h2>

        <input
          type="text"
          placeholder="Service Title"
          className="input input-bordered w-full"
          onChange={(e) =>
            setNewService({ ...newService, title: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Cover Image Url"
          className="input input-bordered w-full"
          onChange={(e) =>
            setNewService({ ...newService, coverImg: e.target.value })
          }
          required
        />

        <textarea
          className="textarea textarea-bordered"
          placeholder="Description"
          onChange={(e) =>
            setNewService({ ...newService, desc: e.target.value })
          }
        ></textarea>

        {newImages.length > 0 && (
          <div className="flex gap-3">
            {newImages.map((img, i) => (
              <img
                src={img}
                alt="-"
                key={i}
                className="w-20 h-20 rounded-full"
              />
            ))}
          </div>
        )}

        <div className="form-control w-full">
          <label className="input-group w-full">
            <input
              type="text"
              placeholder="Service Image URL"
              className="input input-bordered w-full"
              value={newImg}
              onChange={(e) => setNewImg(e.target.value)}
            />
            <button className="btn" onClick={handleImgAdd}>
              Add
            </button>
          </label>
        </div>

        <button className="btn">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
