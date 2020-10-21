import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from './style'
import Copyright from '@parts/Copyright'



export default function Footer(props) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>پایین سایت</Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}