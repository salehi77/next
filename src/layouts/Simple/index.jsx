import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import useStyles from '../styles'
import Header from '@parts/Header'
import Footer from '@parts/Footer'



export default function Layout({ children }) {
  const classes = useStyles()

  return (

    <Paper className={classes.root} square>
      <Header simple />
      <Container component='main' maxWidth='xs' disableGutters className={classes.main}>
        {children}
      </Container>
      <Footer />
    </Paper>
  )
}



Layout.propTypes = {
  children: PropTypes.node,
}

