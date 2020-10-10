
import Container from '@material-ui/core/Container'
import useStyles from './style'
import Header from '@parts/Header'
import Footer from '@parts/Footer'



export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Header />
        <main className={classes.main}>
          {children}
        </main>
      </Container>
      <Footer />
    </div>
  )
}
