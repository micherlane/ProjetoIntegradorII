import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          <div className={styles.description}>
            <p>GetDog</p>
            <p>GetDog é uma rede social destinada às pessoas que desejam divulgar seus serviços de Dogwalks e aos amantes de cachorros que precisam de alguém para passear com seus caẽs.</p>
          </div>
          <div className={styles.login}>
              <form>
                <input type='text' placeholder='Digite seu email...'/>
                <input type='password' placeholder='Digite sua senha...'/>
                <button type='submit'>Entrar</button>
              </form>

              <button>Criar nova conta</button>
          </div>
      </main>
    </>
  )
}
