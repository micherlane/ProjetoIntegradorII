import { AuthContext } from '../contexts/AuthContext';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { FormEvent, useContext, useState } from 'react';
import styles from '@/styles/Home.module.css'
import { canSSRGuest } from '@/utils/canSSRGuest';
import Head from 'next/head';
import { FaSpinner } from 'react-icons/fa';


export default function Home() {
  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);

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

      setLoading(true);

      await signIn(data);

      setLoading(false);
  }

  return (
    <>
      <Head>
          <title>GetDog</title>
      </Head>
      <main className={styles.main}>
          <div className={styles.descriptionSession}>
            <p className={styles.titleGetDog}>GetDog</p>
            <p className={styles.description}>GetDog é uma rede social destinada às pessoas que desejam divulgar seus serviços de Dogwalks e aos amantes de cachorros que precisam de alguém para passear com seus caẽs.</p>
          </div>
          <div className={styles.login}>
              <form>
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className={styles.buttonEnter} onClick={handleLogin} disabled={loading}>{loading ? (<FaSpinner color="#FFF"  className={styles.spinner} size={16}/>): <p>Entrar</p>}</button>
              </form>

              <div className={styles.newAccountContainer}>
                <Link href="/signup" className={styles.buttonNewAccount}>Criar nova conta</Link>
              </div>
          </div>
      </main>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})
