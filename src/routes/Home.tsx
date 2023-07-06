import styles from "./Home.module.css";

import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Home = () => {
  return (
    <section className={styles.container}>
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
          <div id={styles.icons}>
          <Link to="https://github.com/RennanHolanda">
            <VscGithub color="white" fontSize={50}/>
          </Link>
          <Link to="https://www.linkedin.com/in/rennanholanda/">
            <AiOutlineLinkedin color="blue" fontSize={50}/>
          </Link>
          </div>
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
    </section>
  );
};

export default Home;
