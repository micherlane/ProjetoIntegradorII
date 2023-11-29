import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/providers/AuthProvider'
import ToastProvider from '@/providers/ToastProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  )
}
