import classes from "./Search.module.css";
import {
  inputActions,
  selectActions,
  bookActions,
  modalActions,
} from "../store";
import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useEffect } from "react";
import Modal from "./Modal";

const Search = forwardRef(function (props, ref) {
  const inputValue = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const {
    items: books,
    loading,
    fetchErrors,
  } = useSelector((state) => state.books);
  function handleInputChange(event) {
    dispatch(inputActions.setInputValue(event.target.value));
  }

  function onModalClick(book) {
    dispatch(modalActions.openModal(book));
  }
  useEffect(() => {
    if (inputValue) {
      const fetchBooks = async () => {
        dispatch(bookActions.fetchStart());
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${inputValue}:keyes&key=AIzaSyAuVJASf7UQabGC5o6HI6oKR724zwm1Evo`
          );
          if (!response.ok) {
            dispatch(bookActions.fetchError());
          }
          const data = await response.json();
          dispatch(bookActions.fetchSuccess(data.items || []));
        } catch (error) {
          dispatch(bookActions.fetchError());
        }
      };
      fetchBooks();
    }
  }, [inputValue]);
  console.log(fetchErrors);

  return (
    <div ref={ref} className={classes.searchContainer}>
      <div className={classes.searchInput}>
        <label htmlFor="search">Search for books</label>
        <div>
          <div>
            <input
              value={inputValue || ""}
              onChange={handleInputChange}
              id="search"
            />
          </div>
        </div>
        <div>
          {books.length > 0 ? (
            books.slice(0, 3).map((book) => (
              <ul key={book.id} className={classes.searchList}>
                <a onClick={() => onModalClick(book)}>
                  <li className={classes.searchResults} key={book.id}>
                    {book.volumeInfo.title}
                  </li>
                </a>
              </ul>
            ))
          ) : (
            <>
              {fetchErrors && !loading ? (
                <li className={classes.error}>An error occured</li>
              ) : loading ? (
                <p className={classes.searchResults}>loading...</p>
              ) : (
                <li className={classes.searchResults}>No results found</li>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default Search;
