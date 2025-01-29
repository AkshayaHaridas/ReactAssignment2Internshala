import { useRouteError, Link } from "react-router-dom";
const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops!! Not Found</h1>
      <h3></h3>
      <Link to="/">
        <button className="btn-primary">Back to Home</button>
      </Link>
    </>
  );
};
export default NotFoundPage;
