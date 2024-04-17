import { useId } from "react";

import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onChange }) => {
  const id = useId();

  return (
    <div className={css["search-box"]}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text"
        id={id}
        value={inputValue}
        onChange={onChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
