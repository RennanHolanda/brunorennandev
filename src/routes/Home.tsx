import styles from "./Home.module.css";

import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Github from "/img/github-original.svg"
import Lk from "/img/linkedin-plain.svg"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <h1>Bem-vindo ao meu portfólio</h1>
        <p>Desenvolvedor Full Stack</p>
        <div className={styles.text}>
          <p>
            Olá, me chamo Bruno Rennan, desenvolvedor Full Stack com experiência em Node.js,
            JavaScript, TypeScript, React, HTML e CSS. Especializado em criação
            de aplicativos web completos. Pronto para desenvolver projetos de
            alta qualidade.
          </p>
          <Link to="https://github.com/RennanHolanda">
            <img src={Github} alt="github" />
          </Link>
          <Link to="https://www.linkedin.com/in/rennanholanda/">
            <img src={Lk} alt="linkedin" />
          </Link>
        </div>
      </div>
      <div className={styles.profile}>
        <Link style={{ textDecoration: "none" }} to={"/contact"}>
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
