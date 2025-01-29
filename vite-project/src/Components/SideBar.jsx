import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className=" pt-24 h-screen w-24 bg-slate-600">
        <ul className="flex flex-col pl-2 justify-evenly h-44 gap-2 w-24">
          <Link to="/">
            <li className="btn-primary flex justify-evenly items-center h-10 w-20 border-slate-600 text-white opacity-2 bg-slate-800">
              Home
            </li>
          </Link>
          <Link to="/addBook">
            <li className="btn-primary flex justify-evenly items-center h-10 w-20  border-slate-600 text-white bg-slate-800">
              Add Book
            </li>
          </Link>
          <Link to="/browseBook">
            <li className="btn-primary flex justify-evenly  items-center h-10 w-20  border-slate-600 text-white w-20 transition-all duration-1000 overflow-x-hidden whitespace-nowrap hover:w-28  bg-slate-800">
              Browse Book
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
