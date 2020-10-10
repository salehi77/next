import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Link from '@components/Link'
import useStyles from './style'



const sections = [
  { title: 'Electrical', url: '/signin' },
  { title: 'Sports', url: '/signup' },
  { title: 'Styles', url: '/formik' },
  { title: 'House', url: '/signin' },
  { title: 'Mobile', url: '/signup' },
]


export default function Header(props) {
  const classes = useStyles()

  return (
    <AppBar className={classes.appbar} color='transparent'>


      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      // spacing={3}
      >

        <Grid item>
          <img src='https://images-na.ssl-images-amazon.com/images/I/41ckhg5EcHL.jpg' width='100' />
        </Grid>
        <Grid item xs={6}>

          <Toolbar className={classes.toolbar}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <Input
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

          </Toolbar>

          <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>

            {
              sections.map((section) => (
                <Button as={Link}
                  key={section.title}
                  href={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Button>
              ))
            }
          </Toolbar>

        </Grid>
        <Grid item className={classes.buttons}>
          <Grid
            container
          // spacing={1}
          >
            <Grid item>
              <Button size='small' href='/signin' as={Link}>
                sign-in
              </Button>
            </Grid>

            <Grid item>
              <Button size='small' variant='outlined' color="primary" href='/signup' as={Link}>
                sign-up
              </Button>
            </Grid>
          </Grid>
        </Grid>


      </Grid>

    </AppBar>
  )
}
