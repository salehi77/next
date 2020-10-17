import Head from 'next/head'
import Rotuer, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@theme/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@styles/global.scss'
import api from '@services/api'
import { toast } from 'react-toastify'
import { UserContext } from '@contexts/index'




export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user, setUser] = useState(null)


  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    let { query } = router
    if (query.action && query.action === 'activate' && query.uid && query.token) {
      api.activation({ ...query })
        .then(() => {
          toast.success('Your account activated successfully', { autoClose: false })
        })
        .catch((err) => {
        })
    }
  }, [router])


  useEffect(() => {
    api.validateToken()
      .then((res) => {
        setUser(true)
      })
      .catch(() => {
        setUser(null)
      })
  }, [])


  return (
    <>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer toastClassName='toast' />
        <UserContext.Provider value={user}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
