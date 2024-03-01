import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";
import Select from "./Select";
import styles from "./SelectRegion.module.css";

function SelectRegion({ setFilterRegion, currentRegion }) {
  const { theme } = useTheme();
  const regions = [
    { id: "africa", name: "Africa" },
    { id: "americas", name: "Americas" },
    { id: "asia", name: "Asia" },
    { id: "europe", name: "Europe" },
    { id: "oceania", name: "Oceania" },
  ];

  return (
    <div className={`${styles.selectRegion_Container} ${theme}`}>
      <Select
        data={regions}
        placeholder="Filter by Region"
        onChange={(e) => setFilterRegion(e.target.value)}
        value={currentRegion}
        className={styles.filterRegion}
      />
    </div>
  );
}

SelectRegion.propTypes = {
  setFilterRegion: PropTypes.func.isRequired,
  currentRegion: PropTypes.string,
};

SelectRegion.defaultProps = {
  currentRegion: "",
};

export default SelectRegion;
