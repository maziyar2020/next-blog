import '../styles/globals.css'
// notifications
import { Toaster } from 'react-hot-toast'

// redux
import { wrapper } from '../redux/store'
import { useEffect } from 'react'
import { loadUserData } from 'src/redux/user/userActions'
import { useStore } from 'react-redux'
// components stylesheets
import '../components/utils/progress/progress.css'
import '../styles/home.css'
import '../styles/home-swiper.css'
// swiper
import 'swiper/css';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }) {
  const store = useStore()



  useEffect(() => {
    loadUserData(store)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default wrapper.withRedux(MyApp)