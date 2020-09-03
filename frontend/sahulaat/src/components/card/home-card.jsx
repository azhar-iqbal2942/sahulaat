import React from "react";
import { Link } from "react-router-dom";

const MainCard = ({ data }) => {
  return (
    <section className="text-gray-700 body-font" id="services">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font">OUR SERVICES</h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            We can handle professionally home and office Maintenance & Repair Construction, or Other Handyman Services
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data &&
            data.map((service) => (
              <div className="p-4 lg:w-1/2" key={service.id}>
                <Link to={`/offer/${service.id}`}>
                  <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                      src={service.thumbnail}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">{service.name}</h2>
                      {/* <h3 className="mb-3 text-gray-500">Holden Caulfield</h3> */}
                      <p className="mb-4">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainCard;
