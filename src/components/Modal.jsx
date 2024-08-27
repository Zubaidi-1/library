import classes from "./Modal.module.css";
import { modalActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Modal({ bookImg, title, description, Link }) {
  const dispatch = useDispatch();
  const selectedBook = useSelector((state) => state.modal.selectedBook);
  const open = useSelector((state) => state.modal.open);
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  return (
    <div className={classes.modalBackground}>
      <div className={classes.desContainer}>
        <img
          src={
            selectedBook?.volumeInfo?.imageLinks?.thumbnail
              ? selectedBook?.volumeInfo?.imageLinks.thumbnail
              : ""
          }
        />
        <div className={classes.text}>
          <h1>{selectedBook?.volumeInfo?.title}</h1>
          <p className={classes.description}>
            {selectedBook?.volumeInfo?.description?.slice(0)}
          </p>
          <div className={classes.buttons}>
            {selectedBook?.saleInfo?.buyLink ? (
              <a
                className={classes.buyNow}
                href={selectedBook.saleInfo.buyLink}
                target="_blank"
              >
                Buy Now: {selectedBook.saleInfo?.listPrice?.amount}
                {selectedBook.saleInfo.listPrice?.currencyCode}
              </a>
            ) : (
              <span style={{ color: "red", cursor: "default" }}>
                Not available for purchase
              </span>
            )}
            <button
              className={classes.close}
              onClick={() => dispatch(modalActions.closeModal())}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
