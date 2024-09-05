import * as Yup from "yup";

// Validation schema
export const validationSchema = Yup.object().shape({
  bookTitle: Yup.string()
    .max(255, "Book Title cannot exceed 255 characters")
    .required("Book Title is required"),
  bookAuthor: Yup.number()
    .required("Author is required")
    .integer("Author ID must be an integer"),
});
