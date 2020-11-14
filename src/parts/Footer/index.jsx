import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import useStyles from './style'
import Copyright from '@parts/Copyright'



export default function Footer() {
  const classes = useStyles()

  return (
    <Paper className={classes.footer} component='footer' elevation={2}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>پایین سایت</Typography>
        <Copyright />
      </Container>
    </Paper>
  )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}