import { useTheme } from "../context/ThemeContext";
import { SwitchToDarkIcon, SwitchToLightIcon } from "../utils/IconComponent"; // Ensure paths are correct
import styles from "./Header.module.css";

function Header() {
  const { theme, toggleTheme } = useTheme();

  const IconComponent = theme === "dark" ? SwitchToLightIcon : SwitchToDarkIcon;
  const modeText = theme === "dark" ? "Dark Mode" : "Light Mode";
  const shadowClass =
    theme === "dark" ? "dark-mode-shadow" : "light-mode-shadow";

  return (
    <>
      <header
        className={`${styles.header} ${shadowClass} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      >
        <div>
          <h1 className={styles.title}>Where in the world?</h1>
        </div>
        <div>
          <button className={styles.switchThemeBtn} onClick={toggleTheme}>
            <IconComponent />
            <span>{modeText}</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
