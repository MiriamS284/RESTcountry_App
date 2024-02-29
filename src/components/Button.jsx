import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";
import styles from "./Button.module.css";

function Button({ className, onClick, children }) {
  const { theme } = useTheme();

  const buttonClass = `${className} ${styles["btn_back"]} ${styles[theme]}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
