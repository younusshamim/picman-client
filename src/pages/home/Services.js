import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleService from "../../shared/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://service-review-server-roan.vercel.app/services?size=3")
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

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="my-20 flex flex-col items-center">
      <h1 className="font-bold text-3xl mb-10">SERVICES</h1>

      <div className="grid grid-cols-3 gap-10 mb-10">
        {services.map((service) => (
          <Link to={`/services/${service._id}`}>
            <SingleService service={service} />
          </Link>
        ))}
      </div>

      <Link to="/services">
        <button className="btn px-10">SEE MORE</button>
      </Link>
    </div>
  );
};

export default Services;
