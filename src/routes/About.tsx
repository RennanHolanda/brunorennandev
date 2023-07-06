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
import { Link } from "react-router-dom";

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
      <h2>EDUCAÇÃO</h2>
      <div className={styles.about}>
        <div id={styles.education}>
          <h3>Universidade Estácio</h3>
          <h4>Analise e Desenvolvimento de Sistemas</h4>
          <p>
            Fev/2023 <strong>(Cursando)</strong>
          </p>
          <Link
            to={
              "https://www.linkedin.com/in/rennanholanda/details/education/1635532494765/single-media-viewer/?profileId=ACoAABYqju0B1Zg5VHexd_4IVZEtS3BXCTVoroI"
            }
          >
            CERTIFICADO
          </Link>
        </div>
        <div id={styles.education}>
          <h3>Universidade Joaquim Nabuco</h3>
          <h4>Administração</h4>
          <p><strong>2013 - 2017</strong></p>
          <Link
            to={
              "https://www.linkedin.com/in/rennanholanda/overlay/1635498414042/single-media-viewer/?profileId=ACoAABYqju0B1Zg5VHexd_4IVZEtS3BXCTVoroI"
            }
          >
            CERTIFICADO
          </Link>
        </div>
      </div><br />
      <h2>CURSOS COMPLEMENTARES</h2>
      <div className={styles.about_course}>
        <div id={styles.course}>
        <h3>Digital House</h3>
          <h4>Desenvolvimento Web Full Stack</h4>
          <strong>Mar de 2022 - Set de 2022</strong>
          <p>Atividades e grupos: Node.js, Javascript, Metodologia de desenvolvimento, Base de dados, APIs, Javascript Frontal, React.</p>
          <Link
            to={
              "https://www.linkedin.com/in/rennanholanda/overlay/1635503225158/single-media-viewer/?profileId=ACoAABYqju0B1Zg5VHexd_4IVZEtS3BXCTVoroI"
            }
          >
            CERTIFICADO
          </Link>
        </div>
        <div id={styles.course}>
        <h3>Udemy</h3>
          <h4>TypeScript do básico ao avançado (c/ React, Express)</h4>
          <strong>Jan - 2023</strong>
          <p>Aprendi TypeScript com React e Express, criando aplicações web seguras e escaláveis. Desenvolvi componentes reutilizáveis, integrei rotas e implementei autenticação. Agora posso criar apps web modernos com ótima experiência do usuário.</p>
          <Link
            to={
              "https://www.udemy.com/certificate/UC-a6c8e6db-063a-4006-b861-2325dea847b5/"
            }
          >
            CERTIFICADO
          </Link>
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
