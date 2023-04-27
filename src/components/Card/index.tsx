import styles from "./card.module.css";

const Card = ({ characters, filter }: any) => {
  console.log(filter);
  console.log(
    characters.filter((location: any) => {
      if (filter === "all") {
        return location;
      } else if (
        (filter === "dead" || filter === "alive") &&
        location.status.toLowerCase().includes(filter.toLowerCase())
      ) {
        return location;
      } else if (
        (filter === "male" || filter === "female") &&
        location.gender.toLowerCase().includes(filter.toLowerCase())
      ) {
        return location;
      }
    })
  );
  return (
    <>
      {characters
        .filter((location: any) => {
          if (filter === "all") {
            return location;
          } else if (
            (filter === "dead" || filter === "alive") &&
            location.status.toLowerCase().includes(filter.toLowerCase())
          ) {
            return location;
          } else if (
            (filter === "male" || filter === "female") &&
            location.gender.toLowerCase().includes(filter.toLowerCase())
          ) {
            return location;
          }
        })
        .map((location: any) => {
          return (
            <li key={location.id} className={styles.items}>
              <img src={location.image} alt={location.name} />
              <div className={styles.wrapper_characters}>
                <h2 className={styles.characters_name}>{location.name}</h2>
                <div>
                  <div className={styles.wrapper_desc}>
                    <p>
                      Espécie:{" "}
                      <span className={styles.span_desc}>
                        {location.species}
                      </span>
                    </p>
                    <p>
                      Origem:{" "}
                      <span className={styles.span_desc}>
                        {location.location.name}
                      </span>
                    </p>
                  </div>
                  <div className={styles.wrapper_desc}>
                    <p className={styles.wrapper_status}>
                      <div
                        className={`${styles.status} ${
                          location.status === "unknown"
                            ? styles.status_background_unknown
                            : location.status === "Alive"
                            ? styles.status_background_alive
                            : styles.status_background_dead
                        }`}
                      ></div>
                      <span>{location.status}</span>
                    </p>
                    <p>
                      Primeira aparição em:{" "}
                      <span className={styles.span_desc}>
                        {location.episode[0].name}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </>
  );
};

export { Card };
