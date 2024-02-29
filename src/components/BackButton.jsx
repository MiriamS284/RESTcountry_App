import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Button.module.css";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      className={styles.btn_back}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
