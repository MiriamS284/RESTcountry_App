import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";
import { useTheme } from "../context/ThemeContext";

function CountryCard({ country }) {
  const { theme } = useTheme();
  const shadowClass =
    theme === "dark" ? "dark-mode-shadow" : "light-mode-shadow";

  return (
    <Link to={`/country/${country.name.common}`} className={styles.cardLink}>
      <div
        className={`${styles.card} ${shadowClass}`}
        style={{
          boxShadow:
            theme === "dark" ? "var(--shadow-dark)" : "var(--shadow-light)",
        }}
      >
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className={styles.cardImage}
        />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{country.name.common}</h3>
          <div className={styles.cardInfo}>
            <h4>
              <strong>Population:</strong>
              <span> {country.population.toLocaleString()}</span>
            </h4>
            <h4>
              <strong>Region:</strong>
              <span> {country.region}</span>
            </h4>
            <h4>
              <strong>Capital:</strong>
              <span> {country.capital?.join(", ")}</span>
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CountryCard;
