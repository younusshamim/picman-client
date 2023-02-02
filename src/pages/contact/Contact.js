import React from "react";
import { ImLocation } from "react-icons/im";
import { MdEmail, MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="my-20 flex flex-col">
      <div className="w-full  rounded-xl">
        <iframe
          className="googleMap  rounded-xl"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.595646957583!2d90.4219536!3d23.822193449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1665900111435!5m2!1sen!2sbd"
          height="300"
          loading="lazy"
        ></iframe>
      </div>

      <div className="w-full mt-10 font-semibold p-10 grid grid-cols-3 rounded-xl">
        <div className="flex gap-2 items-center">
          <ImLocation />
          <p>Baridhara DOHS, Dhaka</p>
        </div>

        <div className="flex gap-2 items-center">
          <MdEmail />
          <p>Baridhara DOHS, Dhaka</p>
        </div>

        <div className="flex gap-2 items-center">
          <MdCall />
          <p>Baridhara DOHS, Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
