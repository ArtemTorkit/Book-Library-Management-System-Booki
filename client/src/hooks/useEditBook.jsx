import { useState, useContext } from "react";
import axios from "axios";
import { BookContext } from "../contexts/BookContext";
import { useNotification } from "./NotificationContext";

const useEditBook = () => {
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [error, setError] = useState({});
  const { setBooks, activeBook, setActiveBook } = useContext(BookContext);
  const notify = useNotification();

  const handleSubmit = async (values, { resetForm }) => {
    setIsBookAdded(false);
    console.log(error);
    try {
      const newBookData = {
        bookName: values.bookTitle,
        bookAuthor: values.bookAuthor,
      };

      const response = await axios.put(
        `http://127.0.0.1:8000/api/book/${activeBook.id}/`,
        newBookData,
      );

      setBooks((books) =>
        books.map((book) =>
          book.id === response.data.id ? response.data : book,
        ),
      ); // Change data for book
      setIsBookAdded(true); // display success message
      setActiveBook(null); // hide edit form
      notify("Book data successfully edited!", "success"); //dislay sucess notification
      resetForm({ values: { bookTitle: "", bookAuthor: "" } }); // Reset form fields
    } catch (error) {
      notify("Error when editing book!", "fail");
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

export default useEditBook;
