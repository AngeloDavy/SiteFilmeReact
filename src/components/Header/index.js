import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <span>MaiaFlix</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/watch">Assistir</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
