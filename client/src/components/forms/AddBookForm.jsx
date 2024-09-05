import { cross } from "../../assets";

import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

import { Button, Select, Input } from "../formElements";

import { Formik, Form } from "formik";
import { validationSchema } from "../../schemas";
import useCreateBook from "../../hooks/useCreateBook";

const AddBookForm = ({
  bookTitle,
  setBookTitle,
  setBookAuthor,
  bookAuthor,
}) => {
  const { setCreateBook } = useContext(BookContext);
  const { handleSubmit, isBookAdded, error, setError } = useCreateBook();

  return (
    <Formik
      initialValues={{
        bookTitle: bookTitle || "",
        bookAuthor: bookAuthor?.id || null,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize // To renew form when props change
    >
      {({ values, setFieldValue }) => (
        <Form className=" min-h-[300px] md:h-auto md:w-[50%] border-2 bg-brown p-4 rounded-[16px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="text-2xl font-bold text-green">Add New Book</h2>
              {isBookAdded && (
                <p className="text-green text-sm underline">Book successfully added!</p>
              )}
              {error.stack && (
                <p className="text-red text-sm">
                  Book with same title alredy exist!
                </p>
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setCreateBook(false)}
            >
              <img src={cross} alt="close-icon" className="hover-red" />
            </div>
          </div>
          <Input
            value={values.bookTitle}
            onChange={(e) => {
              setFieldValue("bookTitle", e.target.value);
              setBookTitle(e.target.value); // Update prop state for book preview
            }}
          />
          <Select placeholder="Choose Author" setAuthor={setBookAuthor} />
          <div onClick={() => setError({})}> 
          {/*setError({}) to reset 'same book already exists' error before validation */}
            <Button type="submit" content={"CREATE BOOK"} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddBookForm;
