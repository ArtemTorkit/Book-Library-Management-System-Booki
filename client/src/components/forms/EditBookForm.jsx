import { cross } from "../../assets";

import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import useEditBook from "../../hooks/useEditBook";

import { Formik, Form } from "formik";
import { validationSchema } from "../../schemas";
import { Button, Select, Input } from "../formElements";

const EditBookForm = ({
  bookTitle,
  setBookTitle,
  setBookAuthor,
  bookAuthor,
}) => {
  const { setActiveBook } = useContext(BookContext);
  const { handleSubmit, setError } = useEditBook();

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
        <Form className="min-h-[300px] sm:h-auto md:w-[50%]  border-2 border-brown p-4 rounded-[16px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="text-2xl font-bold text-green">Edit Book</h2>
            </div>
            <div className="cursor-pointer" onClick={() => setActiveBook(null)}>
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
          <Select
            setAuthor={setBookAuthor}
            placeholder={bookAuthor?.AuthorName}
          />
          <div onClick={() => setError({})}>
            <Button type="submit" content={"CONFIRM CHANGES"} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditBookForm;
