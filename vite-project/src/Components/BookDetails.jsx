import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const BookDetails = () => {
  const books = useSelector((state) => state._addBookReducer.booksCollection);
  const bookid = useParams().id;
  const book = books.find((x) => x.id == bookid);

  return (
    <div className="flex flex-col p-[40px]">
      <img src={book.image} width="200px" height="300px" />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <p>{book.rating}</p>
      <Link to="/browseBook">
        <button className="btn-primary border-black border-2 w-32 m-auto">
          Back to Browse
        </button>
      </Link>
    </div>
  );
};
export default BookDetails;
