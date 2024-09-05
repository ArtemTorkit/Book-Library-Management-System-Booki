import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [createBook, setCreateBook] = useState(false); //toogle show/hide CreateBook component
  const [activeBook, setActiveBook] = useState(null); //To know what book is edited now and also to show/hide EditBook component
  const [searchTerm, setSearchTerm] = useState(""); //To filter Book List by title

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book/")
      .then((response) => {
        setBooks(response.data.reverse()); //start from the
        //console.log(response.data)
      })
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        createBook,
        setCreateBook,
        activeBook,
        setActiveBook,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
