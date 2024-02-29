import { useState } from "react";
import CountryList from "../components/CountryList";
import Filter from "../components/Filter";
import SelectRegion from "../components/SelectRegion";
import styles from "./Homepage.module.css";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");

  return (
    <main className="main-wrapper">
      <div className={styles.filterBar}>
        <Filter setSearchTerm={setSearchTerm} />
        <SelectRegion setFilterRegion={setFilterRegion} />
      </div>
      <div className="country-grid-container">
        <CountryList searchTerm={searchTerm} filterRegion={filterRegion} />
      </div>
    </main>
  );
}

export default Homepage;
