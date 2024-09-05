import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthorsContext = createContext();

const AuthorsProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [authorFilter, setAuthorFilter] = useState(""); // for filterfing BookList by AuthorName

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/author/")
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <AuthorsContext.Provider value={{ authors, authorFilter, setAuthorFilter }}>
      {children}
    </AuthorsContext.Provider>
  );
};

export default AuthorsProvider;
