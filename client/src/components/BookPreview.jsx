const BookPreview = ({ bookTitle, bookAuthor }) => {
  return (
    <div className="border p-4 rounded-[16px] max-w-[772px] md:w-[50%] bg-[#FCFCFC]">
      <p className="text-xl font-semibold">Book Preview:</p>
      <div className="flex flex-col w-full sm:flex-row items-center bg-white gap-[20px] p-4  border border-gray rounded-[16px]  mt-[10px] md:h-[290px]">
        <div className="">
          <img
            src="https://m.media-amazon.com/images/I/51j1nrM7ETL._AC_UF894,1000_QL80_.jpg"
            alt="book-image"
            className=" max-w-[200px] rounded-[8px]"
          />
        </div>
        <div className="flex flex-col justify-between h-full ">
          <div className="">
            <p
              className="font-semibold text-xl md:text-2xl line-clamp-4 break-words break-all whitespace-normal"
              title={bookTitle}
            >
              {bookTitle == "" ? "Book Title" : bookTitle}
            </p>
            <p className="font-thin text-lg mt-[10px]">
              {bookAuthor == null ? "Author Name" : bookAuthor.AuthorName}
            </p>
          </div>
          <div className="bg-[#ededed] w-full lg:w-[200px]  h-[50px] rounded-[8px] hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
