import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Categorize from "./Categorize";
import { useState } from "react";
const BrowseBook = () => {
  const books = useSelector((x) => x._addBookReducer.booksCollection);
  {
    console.log("in browse page", books);
  }
  const [inputValue, setInputValue] = useState("");
  const [book, setBook] = useState(null);
  const categories = [...new Set(books.map((book) => book.category))];
  return (
    <div className="h-screen overflow-y-scroll w-screen">
      {book ? (
        <>
          <img src={book.image} width="200px" height="300" />
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h3>{book.publicationYear}</h3>
          <Link to={`/bookDetails/${book.id}`}>
            <button className="border-black border-2">View Details</button>
          </Link>
        </>
      ) : (
        <div className="flex flex-col p-9 ">
          {/* Search by title or author */}
          <div className="flex gap-5 items-center pl-9 h-[70px]">
            {" "}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="find your book or author"
              className="w-[800px] h-[50px] p-[10px] rounded-[10px]"
            />
            <button
              className="btn-primary pr-[12px] rounded-[3px] pl-[12px]"
              onClick={() => {
                setBook(
                  books.find(
                    (book) =>
                      book.author
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()) ||
                      book.title
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                );
                console.log(book);
              }}
            >
              Search
            </button>
          </div>

          {/* display category wise */}
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col w-full mt-[30px]">
              <button className="btn-primary w-24 bg-slate-200 text-black rounded-[8px] mb-[5px]">
                <Link to={`/bookByCategory/${category}`}>{category}</Link>
              </button>
              <Categorize category={category} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default BrowseBook;
