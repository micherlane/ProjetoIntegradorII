import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/Providers/AuthProvider'
import ToastProvider from '@/Providers/ToastProvider'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  )
}
