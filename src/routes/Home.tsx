import styles from "./Home.module.css";
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <h1>Bem-vindo ao meu portfólio</h1>
        <p>Bruno Rennan / Desenvolvedor Web</p>
      </div>
      <div className={styles.profile}>
        <Link style={{textDecoration: 'none'}} to={"/contact"}>
          <p>
            <BsArrowReturnRight />
            Entre em contato
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
