import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CountryCard from "./CountryCard";
import styles from "./CountryList.module.css";

function CountryList({ searchTerm, filterRegion }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/all";

    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterRegion === "All" ||
          filterRegion === "" ||
          country.region === filterRegion)
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <section className={styles.countriesGrid}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      )}
    </section>
  );
}

CountryList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  filterRegion: PropTypes.string.isRequired,
};

export default CountryList;
