import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Divider from '@material-ui/core/Divider'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Link from '@components/Link'
import MoreIcon from '@material-ui/icons/MoreVert'
import { UserContext } from '@contexts/index'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'



const sections = [
  { title: 'ورزشی', url: '/signup' },
  { title: 'مجلسی', url: '/formik' },
  { title: 'مردانه', url: '/signin' },
  { title: 'زنانه', url: '/formik' },
  { title: 'مسافرتی', url: '/signin' },
]


export default function Header({ simple }) {
  const classesBase = useGlobalStyle()
  const classes = useStyles()
  const user = useContext(UserContext)
  const [mobileMenu, setMobileMenu] = useState(null)


  return (
    <AppBar className={classes.appbar} color='transparent' position='static'>


      <Toolbar component='nav'>

        <Grid
          container
          justify='center'
          alignItems='center'
        >

          <Grid item component={Link} href='/'>
            <img src='/logo.png' width='100' height='100' alt='Logo' />
          </Grid>


          <Grid item xs={12} sm={9} md={6} className={clsx([classesBase.flexRow, simple && classesBase.hidden])}>

            <FormControl fullWidth variant='outlined'>
              <Input
                variant='outlined'
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>




            <div className={classes.sectionDesktop}>
              {
                sections.map((section) => (
                  <Button
                    component={Link}
                    href=''
                    key={section.title}
                    className={classes.toolbarLink}
                  >
                    {section.title}
                  </Button>
                ))
              }
            </div>


            <div className={classes.sectionMobile}>
              <IconButton
                onClick={(event) => setMobileMenu(event.currentTarget)}
              >
                <MoreIcon />
              </IconButton>
            </div>
            <Menu
              anchorEl={mobileMenu}
              keepMounted
              open={Boolean(mobileMenu)}
              onClose={() => setMobileMenu(null)}
            >
              {
                sections.map((section) => (
                  <MenuItem
                    component={Link}
                    href=''
                    onClick={() => setMobileMenu(null)}
                  >
                    {section.title}
                  </MenuItem>
                ))
              }
            </Menu>



          </Grid>




          <Grid item container xs={12} md={3} justify='center' className={clsx([classes.buttons, simple && classesBase.hidden])}>
            <Grid item>
              <Button size='small' href='/signin' as={Link}>
                ورود
              </Button>
            </Grid>
            <Grid item>
              <Button size='small' variant='outlined' color='primary' href='/signup' as={Link}>
                ثبت‌نام
              </Button>
            </Grid>
          </Grid>


        </Grid>

      </Toolbar>

    </AppBar>
  )
}



Header.propTypes = {
  simple: PropTypes.bool,
}