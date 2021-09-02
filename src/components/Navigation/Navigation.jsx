import { Link } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.content}>
      <div className={styles.icon}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.buttons}>
        <Link to="/categories">
          <button className={styles.button}>Categories</button>
        </Link>
        <Link to="/reviews">
          <button className={styles.button}>Reviews</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
