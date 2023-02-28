import styles from './Home.module.css'

const Home = () => {
  return (
    <section id={styles.secaoHome}>
        <h1>Seja bem vindo ao meu portfólio!</h1>
      <div className={styles.home}>
        <div className={styles.intro}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum necessitatibus eveniet corporis suscipit eum voluptatem natus mollitia quae, veritatis ducimus quidem est repellat modi? Recusandae architecto numquam fugit eos explicabo?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum necessitatibus eveniet corporis suscipit eum voluptatem natus mollitia quae, veritatis ducimus quidem est repellat modi? Recusandae architecto numquam fugit eos explicabo?</p>
        </div>
        <div className={styles.profile}>
          <img src="public\img\perfil.png" alt="" />
        </div>
    </div>
    </section>
      
    
  )
}

export default Home