import styles from "./About.module.css";

import Nd from "/img/node.svg";
import Js from "/img/js.svg";
import Ts from "/img/typescript.svg";
import My from "/img/mysql.svg";
import Ex from "/img/express.svg";
import Sq from "/img/sequelize.svg";
import Dk from "/img/docker.svg";
import Rc from "/img/react.svg";
import Ht from "/img/html5.svg";
import Cs from "/img/css3.svg";
import Bt from "/img/bootstrap.svg";
import Gt from "/img/git.svg";
import Gth from "/img/github.svg";

const About = () => {
  return (
    <div className={styles.about_area}>
      <h2>SOBRE MIM</h2>
      <div className={styles.about}>
        <div id={styles.text_about}>
          <p>Sou de Recife-PE</p>
          <p>
            Como desenvolvedor web Full Stack, estou apaixonado pela programação
            e tenho investido 1 ano e meio no desenvolvimento de diversos
            projetos para colocar meu conhecimento em prática.
          </p>
          <p>
            Além disso, tenho buscado constantemente aprender novas tecnologias
            e frameworks, construído um portfólio diversificado e participado de
            comunidades e projetos de código aberto.
          </p>
          <p>
            Estou entusiasmado com minha migração de carreira e comprometido em
            continuar crescendo como desenvolvedor, sempre em busca de soluções
            inovadoras e de qualidade.
          </p>
        </div>
      </div>
      <br />
      <h2>TECNOLOGIAS</h2>
      <div className={styles.about_tec}>
        <section>
          <h4>BACKEND</h4>
          <div id={styles.area_tec}>
            <img src={Nd} alt="Nodejs" />
            <img src={Js} alt="javascript" />
            <img src={Ts} alt="typescript" />
            <img src={My} alt="mysql" />
            <img src={Ex} alt="express" />
            <img src={Sq} alt="sequelize" />
            <img src={Dk} alt="docker" />
          </div>
        </section>
        <section>
          <h4>FRONTEND</h4>
          <div id={styles.area_tec}>
            <img src={Js} alt="javascript" />
            <img src={Rc} alt="react" />
            <img src={Ht} alt="html5" />
            <img src={Cs} alt="css3" />
            <img src={Bt} alt="bootstrap" />
          </div>
        </section>
        <section>
          <h4>VERSIONAMENTO</h4>
          <div id={styles.area_versioning}>
            <img src={Gt} alt="git" />
            <img src={Gth} alt="github" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
