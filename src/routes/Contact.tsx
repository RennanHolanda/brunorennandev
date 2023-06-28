import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact_area}>
        <div className={styles.contact_text}>
          <h2> ENTRE EM CONTATO</h2>
          <div>
            <p>Endereço: <span>Aveninda Chagas Ferreira 173, Recife-Pe</span></p>
            <p>Email: <a href="mailto:bruno_rennan@hotmail.com">bruno_rennan@hotmail.com</a></p>
            <p>Whatszap: <span>81 99822-9957</span></p>
          </div>
        </div>
        <div className={styles.contact_img}>
          <img src="public\img\developer.png" alt="Desenvolvimento" />
        </div>
    </div>
  )
}

export default Contact