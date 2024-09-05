import { useContext } from "react";
import { edit, plus } from "../../assets";
import { BookContext } from "../../contexts/BookContext";

const Button = ({ type, content, background = "bg-green", onClick }) => {
  const { setCreateBook, createBook } = useContext(BookContext);

  switch (
    type //conditional rendering of buttons depending on the type
  ) {
    case "edit": {
      return (
        <button onClick={() => onClick} className="bg-brown ">
          <div className="button-container">
            <img src={edit} alt="edit-icon" />
            <span>edit book</span>
          </div>
        </button>
      );
    }
    case "edit-small": {
      return (
        <button
          onClick={() => onClick}
          className="bg-brown h-[30px] text-[13px] "
        >
          <div className="button-container">
            <img src={edit} alt="edit-icon" className="w-[13px] h-[13px]" />
            <span>edit book</span>
          </div>
        </button>
      );
    }
    case "add":
      return (
        <button
          onClick={() => setCreateBook(!createBook)}
          className="bg-green text-white transition"
        >
          <div className="button-container">
            <img src={plus} alt="add-icon" className="text-white"/>
            <span>add book</span>
          </div>
        </button>
      );
    default: {
      return (
        <button onClick={() => onClick} className={`${background} text-white`}  type="submit">
          <span>{content}</span>
        </button>
      );
    }
  }
};

export default Button;
