import { useState } from "react";
import styles from "./filter.module.css";

const Filter = ({ handleFilters }: any) => {
  const [filter, setFilter] = useState("all");

  function handleOnChange(value: string) {
    setFilter(value);

    handleFilters(value);
  }
  return (
    <select
      name="filter"
      id="filter"
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
      defaultValue={filter}
      className={styles.filter}
    >
      <option defaultChecked disabled>
        Selecione um tipo de filtro
      </option>
      <option value="all">All</option>
      <option value="dead">Dead</option>
      <option value="alive">Alive</option>
      <option value="human">Human</option>
      <option value="alien">Alien</option>
    </select>
  );
};

export { Filter };
