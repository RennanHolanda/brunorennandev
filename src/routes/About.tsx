import styles from "./About.module.css";

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
            <img src="public\img\node.svg" alt="Nodejs" />
            <img src="public\img\js.svg" alt="javascript" />
            <img src="public\img\typescript.svg" alt="typescript" />
            <img src="public\img\mysql.svg" alt="mysql" />
            <img src="public\img\express.svg" alt="express" />
            <img src="public\img\sequelize.svg" alt="sequelize" />
            <img src="public\img\docker.svg" alt="docker" />
          </div>
        </section>
        <section>
          <h4>FRONTEND</h4>
          <div id={styles.area_tec}>
            <img src="public\img\js.svg" alt="javascript" />
            <img src="public\img\react.svg" alt="react" />
            <img src="public\img\html5.svg" alt="html5" />
            <img src="public\img\css3.svg" alt="css3" />
            <img src="public\img\bootstrap.svg" alt="bootstrap" />
          </div>
        </section>
        <section>
          <h4>VERSIONAMENTO</h4>
          <div id={styles.area_versioning}>
            <img src="public\img\git.svg" alt="git" />
            <img src="public\img\github.svg" alt="github" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
