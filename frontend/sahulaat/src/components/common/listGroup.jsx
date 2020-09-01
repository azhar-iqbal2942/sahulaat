import React from "react";

const ListGroup = ({ data, onItemSelect, selectedService }) => {
  return (
    <React.Fragment>
      {/* For Mobile View */}
      {data.map((service) => (
        <button
          key={service.id}
          onClick={() => onItemSelect(service.id)}
          className="px-4 py-2 mx-1 my-1 font-semibold text-blue-700 align-top bg-transparent border border-blue-500 rounded-full lg:hidden hover:bg-blue-500 hover:text-white hover:border-transparent focus:outline-none"
        >
          {service.name}
        </button>
      ))}

      {/* For large Screen  */}
      <div className="hidden my-3 lg:flex lg:flex-col">
        <ul className="font-medium text-left text-gray-600 border rounded-md ">
          {data &&
            data.map((service) => (
              <div key={service.id}>
                <li
                  onClick={() => onItemSelect(service.id)}
                  className={
                    service.id === selectedService
                      ? "py-3 pl-3 bg-gray-800 text-gray-300 rounded-sm"
                      : "py-3 pl-3 hover:bg-gray-200 "
                  }
                >
                  {service.name}
                </li>
                <hr />
              </div>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ListGroup;
