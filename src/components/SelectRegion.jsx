import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";
import styles from "./SelectRegion.module.css";

function SelectRegion({ setFilterRegion, currentRegion }) {
  const { theme } = useTheme();

  const handleChange = (e) => {
    setFilterRegion(e.target.value);
  };

  return (
    <section className="selectRegion_Container">
      <select
        onChange={handleChange}
        value={currentRegion}
        className={`${styles.filterRegion} ${styles[theme]}`}
        name="select"
        id="select"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
}

SelectRegion.propTypes = {
  setFilterRegion: PropTypes.func.isRequired,
  currentRegion: PropTypes.string,
};

export default SelectRegion;
