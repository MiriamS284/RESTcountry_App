import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";
import styles from "./Filter.module.css";

function SearchFilter({ setSearchTerm }) {
  const { theme } = useTheme();

  const strokeColor =
    theme === "dark" ? "hsl(0, 0%, 52%)" : "hsl(200, 15%, 8%)";

  return (
    <section className={styles.filter_Container}>
      <svg
        className={styles.searchIcon}
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.474 9.474 15.2 15.2m-4.32-9.12a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
        ></path>
      </svg>
      <input
        type="search"
        name="search"
        id="search"
        className={styles.searchInput}
        placeholder="Search for a country..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
}

SearchFilter.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

SearchFilter.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchFilter;
