import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newBookMethod, addBookMethod } from "../utils/AddBookSlice";
const AddBook = () => {
  const bookFields = useSelector((state) => state._addBookReducer.newBook);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("books" + bookFields);
  const handleChange = (e) => {
    console.log({ field: e.target.name, value: e.target.value });
    dispatch(newBookMethod({ field: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookMethod());
    console.log("upsss" + bookFields);
    navigate("/browseBook");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col p-[10px]">
        <h1 className="font-bold pb-7 pt-3">ADD BOOKS</h1>
        <label>ID :</label>
        <input
          type="numbers"
          name="id"
          value={bookFields.id}
          onChange={handleChange}
          required
        />
        <label>Title :</label>
        <input
          type="text"
          name="title"
          value={bookFields.title}
          onChange={handleChange}
          required
        />
        <label>Author :</label>
        <input
          type="text"
          name="author"
          value={bookFields.author}
          onChange={handleChange}
          required
        />
        <label>Description :</label>
        <input
          type="text"
          name="description"
          value={bookFields.description}
          onChange={handleChange}
          required
        />
        <label>Image url :</label>
        <input
          type="text"
          name="image"
          value={bookFields.image}
          onChange={handleChange}
          required
        />
        <label>Category :</label>
        <input
          type="text"
          name="category"
          value={bookFields.category}
          onChange={handleChange}
          required
        />
        <label>Rating :</label>
        <input
          type="number"
          name="rating"
          value={bookFields.rating}
          onChange={handleChange}
          required
        />
        <button type="submit" className="mt-[12px] btn-primary">
          Add Book
        </button>
      </form>
    </>
  );
};
export default AddBook;
