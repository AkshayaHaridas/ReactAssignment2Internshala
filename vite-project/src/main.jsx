import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import BookDetails from "./Components/BookDetails";
import AddBook from "./Components/AddBook";
import BrowseBook from "./Components/BrowseBook";
import BookByCategory from "./Components/BooksByCategory";
import App from "./App";
import Home from "./Components/Home";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/browseBook",
        element: <BrowseBook />,
      },
      {
        path: "/bookByCategory/:category",
        element: <BookByCategory />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
