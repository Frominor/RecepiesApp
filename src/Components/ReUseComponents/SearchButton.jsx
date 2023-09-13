import React from "react";
import "./SearchButton.css";
import { AddToRecepiesBook } from "../asyncActions/AddToRecepiesBook";
import { useDispatch } from "react-redux";
export default function SearchButton({ id }) {
  const dispatch = useDispatch();
  const AddReceptToRecepiesBook = () => {
    dispatch(AddToRecepiesBook(id));
  };
  return (
    <div>
      <button
        className="Add_Button"
        value={id}
        onClick={AddReceptToRecepiesBook}
      >
        Add To Recept Book
      </button>
    </div>
  );
}
