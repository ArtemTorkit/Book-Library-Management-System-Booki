import { useContext } from "react";
import Book from "./Book";
import { AuthorsContext } from "../contexts/AuthorContext";
import { BookContext } from "../contexts/BookContext";
import BookAdd from "./views/AddBookView";

const BookList = () => {
  const { authors, authorFilter } = useContext(AuthorsContext);
  const { books, createBook, searchTerm } = useContext(BookContext);

  const filteredBooks = books.filter((book) => {
    const matchesSearchTerm = book.bookName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSearchTerm;
  });

  // console.log("render: ", authorFilter, books);
  return (
    <section className=" grid mt-[40px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] grid-flow-row-dense pb-[300px]">
      {createBook && <BookAdd />}
      {filteredBooks.map((book) =>
        authorFilter === book?.bookAuthor.toString() || authorFilter === "" ? (
          <Book
            id={book.id}
            title={book.bookName}
            author={authors[book.bookAuthor - 1]} //getting string of AuthorName
            key={book.id}
          />
        ) : null,
      )}
    </section>
  );
};

export default BookList;
