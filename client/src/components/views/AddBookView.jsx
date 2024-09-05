import { useState } from "react";
import BookPreview from "../BookPreview";
import AddBookForm from "../forms/AddBookForm";

const BookAdd = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState(null);
  //console.log("rerendering book add");

  return (
    <section className="w-full flex gap-[20px] col-span-1 md:col-span-2 lg:col-span-3 flex-col md:flex-row">
      <BookPreview bookTitle={bookTitle} bookAuthor={bookAuthor} />
      <AddBookForm
        bookAuthor={bookAuthor}
        setBookAuthor={setBookAuthor}
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
      />
    </section>
  );
};

export default BookAdd;
