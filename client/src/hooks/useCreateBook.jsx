import { useState, useContext } from "react";
import axios from "axios";
import { BookContext } from "../contexts/BookContext";
import { useNotification } from "./NotificationContext";

const useCreateBook = () => {
  const { setBooks } = useContext(BookContext);
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [error, setError] = useState({});
  const notify = useNotification();

  const handleSubmit = async (values, { resetForm }) => {
    setIsBookAdded(false);
    // console.log(error);
    try {
      const newBookData = {
        bookName: values.bookTitle,
        bookAuthor: values.bookAuthor,
      };

      // console.log(newBookData);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/book/",
        newBookData,
      );
      notify("Book succesfuly added!", "success");
      setBooks((books) => [response.data, ...books]); // Add new book to list
      setIsBookAdded(true);
      //console.log("Book created:", response.data);

      resetForm({ values: { bookTitle: "", bookAuthor: "" } }); // Reset form fields
    } catch (error) {
      notify("Error when adding book!", "fail");
      setError(error); //For checkign if the same book is existing
      console.error("Error creating book:", error);
    }
  };

  return {
    handleSubmit,
    isBookAdded,
    error,
    setError,
  };
};

export default useCreateBook;
