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
  { title: 'استایل', url: '/formik' },
  { title: 'خانه', url: '/signin' },
  { title: 'آرایشی', url: '/formik' },
  { title: 'الکترونیک', url: '/signin' },
  { title: 'ورزشی', url: '/signup' },
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




            {/* <div style={{ position: 'relative ' }}> */}


            <IconButton
              onClick={(event) => setMobileMenu(event.currentTarget)}
            >
              <MoreIcon />
            </IconButton>


            <Paper
              style={{
                // display: 'flex',
                // flexDirection: 'column',
                // position: 'absolute',
                // top: 0,
                // right: 0,
                // backgroundColor: 'white',
                // borderRadius: 5,
                // border: '1px solid #999',
                // outline: 0,
              }}
            >
              <List

                style={{
                  display: 'flex',
                  // flexDirection: 'column',
                }}
              // className='MuiList-root MuiMenu-list MuiList-padding'
              >
                {
                  sections.map((section) => (
                    <ListItem
                    // className='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'
                    >
                      <Button
                        component={Link}
                        href=''
                        className={classes.toolbarLink}
                      >
                        {section.title}
                      </Button>
                    </ListItem>
                  ))
                }
              </List>


            </Paper>


            {/* </div> */}




            {/* <div className={classes.sectionMobile}>
              <IconButton
                onClick={(event) => setMobileMenu(event.currentTarget)}
              >
                <MoreIcon />
              </IconButton>


            </div> */}

            <Menu
              anchorEl={mobileMenu}
              open={Boolean(mobileMenu)}
              // open
              onClose={() => setMobileMenu(null)}
            >
              {
                sections.map((section) => (
                  <MenuItem
                    onClick={() => setMobileMenu(null)}
                  >
                    <Button
                      component={Link}
                      href=''
                      className={classes.toolbarLink}
                    >
                      {section.title}
                    </Button>
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