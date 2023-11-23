import Link from 'next/link';
import styles from './style.module.css';

export default function SignUp(){
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.titleGetDog}>GetDog</h1>
                <div className={styles.signUp}>
                    <h2>Registre-se</h2>
                    <form>
                        <input type='text' placeholder='Nome'/>
                        <input type='text' placeholder='Email'/>
                        <input type='text' placeholder='Endereço'/>
                        <input type='password' placeholder='Senha'/>
                        <select name="typeUser">
                            <option value="DOG_OWNER">Tutor</option>
                            <option value="DOG_WALK">Passeador</option>
                        </select>
                        <button type='submit' className={styles.register}>Registrar</button>
                    </form>
                    <Link href="/" className={styles.navigationLoginStyle}>Já tem cadastro? <span>Entre aqui!</span></Link>
                </div>
            </main>
        </>
    )
}