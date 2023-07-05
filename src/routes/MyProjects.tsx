import styles from "./MyProjects.module.css";

const MyProjects = () => {
  return (
    <div className={styles.project}>
      <h1>Meus Projetos</h1>
      <section className={styles.img}>
        <div className={styles.card}>
          <img src="src\assets\img\faketube.png" alt="FakeTube" />
          <p>
            Projeto desenvolvido para simular uma plataforma de compartilhamento
            de vídeos.
          </p>
          <a href="https://videostube.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/videostube">Codigo fonte</a>
        </div>
        <div className={styles.card}>
          <img src="src\assets\img\cost.png" alt="Criar projeto" />
          <p>
            Um pequeno sistema eficiente e intuitivo para a elaboração de
            orçamenos de projetos
          </p>
          <a href="https://cost-self.vercel.app/newproject">Veja Online</a>
          <a href="https://github.com/RennanHolanda/Cost">Codigo fonte</a>
        </div>
      </section>
      <br />
      <section className={styles.img}>
        <div className={styles.card}>
          <img src="src\assets\img\pagamento.png" alt="Pagamentos" />
          <p>
            Finalização de pagamento para e-commerce, que permite aos usuários
            adicionar facilmente o cartão da bandeira desejada.
          </p>
          <a href="https://payment-rose.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/Payment">Codigo fonte</a>
        </div>
        <div className={styles.card}>
          <img src="src\assets\img\palavra_secreta.png" alt="Palavra secreta" />
          <p>
            Receba dicas, encontre as respostas corretas e acumule pontos para
            se tornar o melhor jogador.
          </p>
          <a href="https://secret-word-mauve.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/secret-word">Codigo fonte</a>
        </div>
      </section>
      <br />
      <section className={styles.img}>
        <div className={styles.card}>
          <img src="src\assets\img\todo_react.png" alt="Lista de tarefas" />
          <p>Aprimore sua produtividade diária ao organizar suas tarefas com o devido grau de dificuldade.</p>
          <a href="https://todo-react-ts-two.vercel.app/">Veja Online</a>
          <a href="https://github.com/RennanHolanda/todo-react-ts">Codigo fonte</a>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
