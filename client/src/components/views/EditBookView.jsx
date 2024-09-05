import { useState, useContext } from "react";
import BookPreview from "../BookPreview";
import { BookContext } from "../../contexts/BookContext";
import EditBookForm from "../forms/EditBookForm";

const EditBook = () => {
  const { activeBook } = useContext(BookContext);
  const [bookTitle, setBookTitle] = useState(activeBook.title);
  const [bookAuthor, setBookAuthor] = useState(activeBook.author);
  //console.log('rendering edit book');

  return (
    <section className="w-full flex gap-[20px] col-span-1 md:col-span-2 lg:col-span-3 flex-col md:flex-row">
      <BookPreview bookTitle={bookTitle} bookAuthor={bookAuthor} />
      <EditBookForm
        bookAuthor={bookAuthor}
        setBookAuthor={setBookAuthor}
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
      />
    </section>
  );
};

export default EditBook;
