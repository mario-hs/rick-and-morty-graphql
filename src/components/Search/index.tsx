import { useState } from "react";
import styles from "./search.module.css";

const Search = ({ handleSearch }: any) => {
  const [search, setSearch] = useState("");

  function handleOnChange(value: string) {
    setSearch(value);
  }

  return (
    <div className={styles.wrapper_search}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleOnChange(e.target.value)}
        className={styles.search_input}
        value={search}
      />
      <button
        type="submit"
        className={styles.button_search}
        onClick={() => handleSearch(search)}
      >
        Search
      </button>
    </div>
  );
};

export { Search };
