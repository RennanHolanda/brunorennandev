import styles from "./MyProjects.module.css";

import Fk from "../assets/img/faketube.png";
import Ct from "../assets/img/cost.png"
import Pg from "../assets/img/pagamento.png";
import Ps from "../assets/img/palavra_secreta.png";
import Td from "../assets/img/todo_react.png";


const MyProjects = () => {
  return (
    <div className={styles.project}>
      <h2>Meus Projetos</h2>
      <section className={styles.img}>
        <div className={styles.card}>
          <img src={Fk} alt="FakeTube" />
          <p>
            Projeto desenvolvido para simular uma plataforma de compartilhamento
            de vídeos.
          </p>
          <a href="https://videostube.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/videostube">Código fonte</a>
        </div><br />
        <div className={styles.card}>
          <img src={Ct} alt="Criar projeto" />
          <p>
            Um pequeno sistema eficiente e intuitivo para a elaboração de
            orçamenos de projetos
          </p>
          <a href="https://cost-self.vercel.app/newproject">Veja Online</a>
          <a href="https://github.com/RennanHolanda/Cost">Código fonte</a>
        </div>
      </section>
      <br />
      <section className={styles.img}>
        <div className={styles.card}>
          <img src={Pg} alt="Pagamentos" />
          <p>
            Finalização de pagamento para e-commerce, que permite aos usuários
            adicionar facilmente o cartão da bandeira desejada.
          </p>
          <a href="https://payment-rose.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/Payment">Código fonte</a>
        </div><br />
        <div className={styles.card}>
          <img src={Ps} alt="Palavra secreta" />
          <p>
            Receba dicas, encontre as respostas corretas e acumule pontos para
            se tornar o melhor jogador.
          </p>
          <a href="https://secret-word-mauve.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/secret-word">Código fonte</a>
        </div>
      </section>
      <br />
      <section className={styles.img}>
        <div className={styles.card}>
          <img src={Td} alt="Lista de tarefas" />
          <p>Aprimore sua produtividade diária ao organizar suas tarefas com o devido grau de dificuldade.</p>
          <a href="https://todo-react-ts-two.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/todo-react-ts">Código fonte</a>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
