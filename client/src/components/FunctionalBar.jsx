import { cross, search } from "../assets";
import Button from "./formElements/Button";
import { useContext } from "react";
import { AuthorsContext } from "../contexts/AuthorContext";
import { BookContext } from "../contexts/BookContext";

const FunctionalBar = () => {
  const { authors, authorFilter, setAuthorFilter } = useContext(AuthorsContext);
  const { searchTerm, setSearchTerm } = useContext(BookContext);

  return (
    <section className="">
      <div className="mt-[60px] flex flex-col md:flex-row  gap-[21px] w-full">
        <div className="relative basis-1/3 flex items-center">
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Book Title"
          />
          <img
            src={search}
            alt="search-icon"
            className={`${
              searchTerm === ""
                ? "top-[11px] right-[11px]"
                : "top-[11px] right-[41px]"
            } absolute transition-all`} 
          />
          <img
            src={cross}
            alt="cross-icon"
            className={` transition-all cursor-pointer ${
              searchTerm === "" ? "w-0 h-0" : "w-[20px] h-[20px] ml-[10px]" //to show close icon when searchTerm is not empty
            }`}
            onClick={() => setSearchTerm("")}
          />
        </div>
        <div className="basis-1/3 flex items-center">
          <select
            name="bookAuthor"
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
          >
            <option value="" disabled hidden>
              Filter by Author
            </option>
            {authors.map((author) => (
              <option key={author.AuthorName} value={author.id}>
                {author.AuthorName}
              </option>
            ))}
          </select>
          <img
            src={cross}
            alt="cross-icon"
            className={` transition-all cursor-pointer ${
              authorFilter === "" ? "w-0 h-0" : "w-[20px] h-[20px] ml-[10px]" //to show icon when authorFilter is not empty
            }`}
            onClick={() => setAuthorFilter("")}
          />
        </div>
        <div className="flex gap-[21px] basis-1/3">
          <Button type={"add"} />
        </div>
      </div>
    </section>
  );
};

export default FunctionalBar;
