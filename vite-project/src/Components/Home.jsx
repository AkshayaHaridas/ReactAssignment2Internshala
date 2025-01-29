import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const books = useSelector((state) => state._addBookReducer.booksCollection);
  const someBooks = books.filter((book, index) => index % 5 == 0);
  return (
    <div className="p-44 w-screen overflow-y-scroll">
      <h2 className="w-auto m-auto text-8xl">Book Land</h2>
      <p className="pt-20 m-auto">
        Discover books that inspire, entertain, and educate. Explore our
        categories and dive into the adventure!
      </p>
      <ul className=" p-[30px] flex gap-6">
        <li className="border bg-slate-100 p-4">Fiction</li>
        <li className="border bg-slate-100 p-4">Fantasy</li>
        <li className="border bg-slate-100 p-4">Science Fiction</li>
        <li className="border bg-slate-100 p-4">Biography</li>
        <li className="border bg-slate-100 p-4">Romance</li>
      </ul>
      <div className="flex gap-6">
        {someBooks.map((book) => {
          return (
            <div
              key={book.id}
              className="border-black border-2 p-4 bg-white w-52 flex flex-col justify-evenly"
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
        })}
      </div>
    </div>
  );
};
export default Home;
