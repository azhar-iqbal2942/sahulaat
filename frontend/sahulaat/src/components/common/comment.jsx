import React from "react";
import moment from "moment";

const Comment = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col mt-4 lg:flex-row ">
          <div className="w-full lg:w-1/12 ">
            <img
              className="w-16 h-16 mx-auto rounded-full"
              src="https://source.unsplash.com/user/erondu/720x600"
              alt=""
            />
          </div>
          <div className="w-full text-center lg:text-left lg:w-6/12 ">
            <h2 className="text-xl font-semibold text-gray-800">
              {comment.author.first_name} {comment.author.last_name}
            </h2>
            <p className="text-sm text-gray-700">{moment(comment.timestamp).format("DD-MM-YY")}</p>
            <div className="mt-2">
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
          <hr className="mt-2" />
        </div>
      ))}
    </div>
  );
};

export default Comment;
