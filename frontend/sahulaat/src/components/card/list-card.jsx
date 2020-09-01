import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ data }) => {
  return (
    <Link to={`/offer/detail/${data.id}`}>
      <div className="mx-6 mt-12 lg:mx-6">
        <div className="mx-6 my-12 shadow-xl lg:max-w-full lg:flex">
          <div
            className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            style={{ backgroundImage: "url(https://source.unsplash.com/1600x900/?nature,water)" }}
            title="Thumbnail"
          ></div>
          <div className="flex flex-col justify-between p-4 leading-normal bg-white">
            <div className="mb-8">
              <div className="mb-2 text-xl font-bold text-gray-700">{data.title}</div>
              <p className="text-base text-gray-700">{data.description}</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 mr-4 rounded-full"
                src="https://source.unsplash.com/1600x900/?human"
                title="Avator"
                alt="Avatar"
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">{data.author.first_name + " " + data.author.last_name}</p>
                <p className="text-gray-600">{data.created_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
