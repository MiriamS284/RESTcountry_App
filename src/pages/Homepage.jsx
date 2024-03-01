import { useState } from "react";
import CountryList from "../components/CountryList";
import Filter from "../components/Filter";
import SelectRegion from "../components/SelectRegion";
import styles from "./Homepage.module.css";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");

  return (
    <section className="main_wrapper">
      <div className={styles.filterBar}>
        <Filter setSearchTerm={setSearchTerm} />
        <SelectRegion
          setFilterRegion={setFilterRegion}
          currentRegion={filterRegion}
        />
      </div>
      <div className="country-grid-container">
        <CountryList searchTerm={searchTerm} filterRegion={filterRegion} />
      </div>
    </section>
  );
}

export default Homepage;
