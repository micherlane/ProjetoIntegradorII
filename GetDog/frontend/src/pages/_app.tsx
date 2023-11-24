import { AuthProvider } from '@/Providers/AuthProvider'
import ToastProvider from '@/Providers/ToastProvider'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ToastProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000}/>
    </ToastProvider>)
}
