import { useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CHARACTERS } from "../../lib/fragments";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";

import "../../assets/css/light.module.css";
import "../../assets/css/dark.module.css";

import styles from "../../assets/css/styles.module.css";
import stylesHome from "./home.module.css";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [dataCharacters, setDataCharacters] = useState();
  const [page, setPage] = useState(0);

  const { loading, error } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
    onCompleted: (data) => {
      if (data) {
        setDataCharacters(data.characters.results);
      }
    },
  });

  const [characters] = useLazyQuery(GET_CHARACTERS);

  function handleSearch(search: string) {
    characters({
      variables: { page, filter: search },
      onCompleted: (data) => {
        if (data) {
          setDataCharacters(data.characters.results);
        }
      },
    });
  }

  function handleFilters(filter: string) {
    setFilter(filter);
  }

  return (
    <>
      {loading && <div className={styles.loading}>Loading...</div>}
      {error && (
        <div className={styles.error}>Desculpe tivemos alguns problemas!</div>
      )}
      {!loading && !error && (
        <div className={styles.container}>
          <header>
            <Search handleSearch={handleSearch} />

            <Filter handleFilters={handleFilters} />
          </header>

          <main>
            <ul className={stylesHome.wrapper_card}>
              {dataCharacters && (
                <Card characters={dataCharacters} filter={filter} />
              )}
            </ul>
          </main>
          <nav>
            <button
              disabled={!page}
              onClick={() => setPage((prev) => prev - 1)}
              className={stylesHome.button_nav}
            >
              Previous
            </button>
            <span className={stylesHome.count_page}>{page + 1}</span>
            <button
              onClick={() => setPage((next) => next + 1)}
              className={stylesHome.button_nav}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export { Home };
