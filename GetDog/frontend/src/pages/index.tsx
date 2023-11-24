import { AuthContext } from '../contexts/AuthContext';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { FormEvent, useContext, useState } from 'react';
import styles from '@/styles/Home.module.css'


export default function Home() {
  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  

  const handleLogin = async (event: FormEvent) => {
      event.preventDefault();

      if(email === '' || password === ''){
        toast.error('Preencha todos os campos!');
        return ;
      }

      let data = {
        email,
        password,
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
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
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
