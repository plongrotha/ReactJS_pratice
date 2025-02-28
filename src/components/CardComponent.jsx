import React from "react";

export default function CardComponent({ data }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((book, index) => (
        <div key={index} className="w-[260px] h-[160px] p-2 relative shadow-lg">
          <div className="p-2 rounded-l-[7px] absolute right-0 top-0 bg-blue-500 text-white">
            <p>{book.date}</p>
          </div>

          <div className="p-4 mt-7">
            <h1 className=" text-gray-600 font-bold text-2xl">
              {book.booktitle}
            </h1>
            <p className="text-sm text-gray-600">Author: {book.author}</p>
            <p className="text-sm text-gray-600">Edition: {book.edition}</p>
            <p className="text-sm text-gray-600">Quanity: {book.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
