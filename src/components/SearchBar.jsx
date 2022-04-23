import React from "react";

import styles from "./SearchBar.module.css";
import { IoAdd } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = React.useState("");

  const searchInput = () => {
    onSearch(search);
    setSearch("");
  };

  return (
    <>
      <div className={styles.menubar}>
        <div className={styles.flex}>
          <div className={styles.searchBar}>
            <input
              type="text"
              className={styles.input}
              id="inputSearch"
              placeholder="Buscar una Ciudad..."
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") searchInput();
              }}
            />
            <button className={styles.button} onClick={searchInput}>
              <IoAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
