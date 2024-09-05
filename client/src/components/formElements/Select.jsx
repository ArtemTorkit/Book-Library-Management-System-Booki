import { useContext } from "react";
import { AuthorsContext } from "../../contexts/AuthorContext";
import { ErrorMessage } from "formik";

const Select = ({ placeholder = "Filter by Author", setAuthor }) => {
  const { authors } = useContext(AuthorsContext);

  return (
    <div>
      <label htmlFor="bookAuthor">Author</label>
      <select
        name="bookAuthor"
        defaultValue=""
        onChange={(e) => setAuthor(JSON.parse(e.target.value))}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {authors.map((author) => (
          <option key={author.AuthorName} value={JSON.stringify(author)}>
            {author.AuthorName}
          </option>
        ))}
      </select>
      <ErrorMessage // display err with Fomik
        name="bookAuthor"
        component="div"
        className="text-red text-sm"
      />
    </div>
  );
};

export default Select;
