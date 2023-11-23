"use client";

import styles from './page.module.css'
import { useContext, FormEvent} from 'react';
import { AuthContext } from './contexts/AuthContext';
import Link from 'next/link';
import SignUp from './SignUp/page';

export default function Home() {
  const {signIn} = useContext(AuthContext);

  const handleLogin = async (event: FormEvent) => {
      event.preventDefault();

      let data = {
        email: "teste@teste.com",
        password: "123123",
      }; 
      await signIn(data);
  }

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
                <button type='submit' className={styles.buttonEnter} onClick={handleLogin}>Entrar</button>
              </form>

              <div className={styles.newAccountContainer}>
                <Link href="/SignUp" className={styles.buttonNewAccount}>Criar nova conta</Link>
              </div>
          </div>
      </main>
    </>
  )
}
