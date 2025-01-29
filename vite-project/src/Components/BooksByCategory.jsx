import { useParams } from "react-router-dom";
import Categorize from "./Categorize";
const BookByCategory = () => {
  const params = useParams();
  const category = params.category;
  return (
    <div>
      <Categorize category={category} />
    </div>
  );
};

export default BookByCategory;
