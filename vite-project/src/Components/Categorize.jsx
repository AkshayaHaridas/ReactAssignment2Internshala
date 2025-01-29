import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Categorize = ({ category }) => {
  const books = useSelector((state) => state._addBookReducer.booksCollection);

  return (
    <div className="flex gap-6 w-full mt-8 pl-24">
      {books.map((book) => {
        if (category === book.category) {
          return (
            <div
              key={book.id}
              className="border-black border-2 p-4 mb-8 bg-white w-52 flex flex-col justify-evenly"
            >
              <img src={book.image} width="200px" height="300px" />
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <h3>{book.publicationYear}</h3>
              <Link to={`/bookDetails/${book.id}`}>
                <button className="btn-primary border-black border-2 w-44">
                  View Details
                </button>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Categorize;
