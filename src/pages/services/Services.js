import React, { useEffect, useState } from "react";
import SingleService from "../../shared/SingleService";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://service-review-server-roan.vercel.app/services")
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

  document.title = "Services | Picman";

  return (
    <div className="my-20">
      <h1 className="font-bold text-3xl mb-10 text-center">SERVICES</h1>

      <div className="grid grid-cols-3 gap-10 mb-10">
        {services.map((service) => (
          <Link to={`/services/${service._id}`}>
            <SingleService service={service} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
