import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          <div className={styles.descriptionSession}>
            <p className={styles.titleGetDog}>GetDog</p>
            <p className={styles.description}>GetDog é uma rede social destinada às pessoas que desejam divulgar seus serviços de Dogwalks e aos amantes de cachorros que precisam de alguém para passear com seus caẽs.</p>
          </div>
          <div className={styles.login}>
              <form>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Senha'/>
                <button type='submit' className={styles.buttonEnter}>Entrar</button>
              </form>

              <button className={styles.buttonNewAccount}>Criar nova conta</button>
          </div>
      </main>
    </>
  )
}
