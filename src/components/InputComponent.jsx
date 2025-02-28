import React, { useState } from "react";
import CardComponent from "./CardComponent";

export default function InputComponent() {
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [
      ...prevBooks,
      { id: prevBooks.length + 1, ...book },
    ]);
    setBook({});
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="booktitle"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Book Title
            </label>
            <input
              type="text"
              id="booktitle"
              name="booktitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter book title"
              value={book?.booktitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter author"
              value={book?.author}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 grid-cols-3">
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              value={book?.date}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* adition */}
          <div>
            <label
              htmlFor="edition"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Edition
            </label>
            <input
              type="number"
              id="edition"
              name="edition"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter edition"
              value={book?.edition}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* quanity */}
          <div>
            <label
              htmlFor="quantity"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter quantity"
              value={book?.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex items-start">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </div>
      </form>

      <CardComponent data={books} />
    </div>
  );
}
