import { ErrorMessage } from "formik";

const Input = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="bookTitle">Book Title</label>
      <input
        type="text"
        name="bookTitle"
        value={value}
        onChange={onChange}
        placeholder="Book Title"
        className="border p-2 rounded w-full"
      />
      <ErrorMessage //display error with Formik
        name="bookTitle"
        component="div"
        className="text-red text-sm"
      />
    </div>
  );
};

export default Input;
