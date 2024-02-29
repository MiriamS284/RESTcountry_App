import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import styles from "./CountryDetails.module.css";
import BackButton from "./BackButton";

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok) throw new Error("Country not found.");
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountryDetails();
  }, [name]);

  // Helper function to join object values, used for currencies and languages
  const joinObjectValues = (obj, property = "") =>
    Object.values(obj)
      .map((item) => (property ? item[property] : item))
      .join(", ");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <BackButton />
      <section className={styles.country_info_wrapper}>
        <div className={styles.country_info_img}>
          <img
            src={country.flags?.svg}
            alt={`${country.name?.common} Flag`}
            className={styles.flag}
          />
        </div>
        <div className={styles.country_info}>
          <h3>{country.name?.common}</h3>
          <div className={styles.country_info_left}>
            <h4>
              Native Name:{" "}
              {
                country.name?.nativeName[
                  Object.keys(country.name?.nativeName)[0]
                ]?.official
              }
            </h4>
            <h4>
              Population: <span> {country.population?.toLocaleString()}</span>
            </h4>
            <h4>
              Region: <span> {country.region} </span>
            </h4>
            <h4>
              Sub Region: <span>{country.subregion}</span>
            </h4>
            <h4>
              Capital:<span> {country.capital} </span>
            </h4>
          </div>
          <div className={styles.country_info_right}>
            <h4>
              Top Level Domain: <span>{country.tld?.join(", ")} </span>
            </h4>
            <h4>
              Currencies:{" "}
              <span>{joinObjectValues(country.currencies, "name")} </span>
            </h4>
            <h4>
              Languages: <span>{joinObjectValues(country.languages)}</span>{" "}
            </h4>
          </div>
          <div className={styles.country_info_border}>
            <h5>Border Countries:</h5>
            {country.borders ? (
              country.borders.map((border) => (
                <span
                  key={border}
                  className={
                    theme === "light" ? styles.borderLight : styles.borderDark
                  }
                >
                  {border}{" "}
                </span>
              ))
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default CountryDetails;
