import Link from 'next/link';
import styles from './style.module.css';

import { FormEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Head from 'next/head';
import { AuthContext } from '@/contexts/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';
import { FaSpinner } from 'react-icons/fa';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typeUser, setTypeUser] = useState('DOG_OWNER');
    const [address, setAddress] = useState('');

    const [loading, setLoading] = useState(false);

    const { signUp } = useContext(AuthContext);

    const handleSignUp = async (event: FormEvent) => {
        event.preventDefault();
        if(!name || !email || !password || !address) {
            toast.warning('Preecha todos os dados!');
            return;
        }

        let data = {name, email, password, typeUser, address};

        setLoading(true);

        await signUp(data);

        setLoading(false);
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.titleGetDog}>GetDog</h1>
                <div className={styles.signUp}>
                    <h2>Registre-se</h2>
                    <form onSubmit={handleSignUp}>
                        <input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type='text' placeholder='Endereço' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <select name="typeUser" value={typeUser} onChange={(e) => setTypeUser(e.target.value)}>
                            <option value="DOG_OWNER">Tutor</option>
                            <option value="DOG_WALK">Passeador</option>
                        </select>
                        <button type='submit' className={styles.register} disabled={loading}>{loading ? (<FaSpinner color="#FFF"  className={styles.spinner} size={16}/>): <p>Registrar</p>}</button>
                    </form>
                    <Link href="/" className={styles.navigationLoginStyle}>Já tem cadastro? <span>Entre aqui!</span></Link>
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