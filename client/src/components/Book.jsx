import { useContext } from "react";
import { recycleBin } from "../assets";
import Button from "./formElements/Button";
import axios from "axios";
import { BookContext } from "../contexts/BookContext";
import EditBook from "./views/EditBookView";
import { useNotification } from "../hooks/NotificationContext";

const Book = ({ title, author, id }) => {
  const { setBooks, activeBook, setActiveBook } = useContext(BookContext);
  const notify = useNotification(); // my notification custom hook

  const deleteBook = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/book/${id}/`)
      .then((response) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        notify("Book succesfuly deleted!", "success");
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
        notify("Failed to delete book!", "fail");
      });
  };
  
  return activeBook?.id !== id ? (
    <div className="col-span-1 book rounded-[12px] border border-gray hover:border-black transition w-full  flex justify-between p-[0.8rem] gap-4">
      <div className="flex gap-4">
        <img
          src="https://m.media-amazon.com/images/I/51j1nrM7ETL._AC_UF894,1000_QL80_.jpg"
          alt="book-image"
          className=" max-w-[100px] rounded-[8px]"
        />
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <p className="font-semibold line-clamp-2" title={title}>
              {title}
            </p>
            <p className="font-thin underline cursor-pointer">
              {author?.AuthorName}
            </p>
          </div>
          <div
            className="max-w-[120px]"
            onClick={() =>
              setActiveBook({ title: title, author: author, id: id }) //to display edit book form for proper book
            }
          >
            <Button type="edit-small" />
          </div>
        </div>
      </div>
      <div className="w-[20px] h-[20px] flex-shrink-0 group">
        <img
          src={recycleBin}
          alt=""
          className="hover-red"
          onClick={() => {
            deleteBook();
          }}
        />
      </div>
    </div>
  ) : (
    <EditBook />
  );
};

export default Book;
