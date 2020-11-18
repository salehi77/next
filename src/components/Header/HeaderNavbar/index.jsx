import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
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
import MoreIcon from '@material-ui/icons/MoreVert'
import Link from '@components/Link'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'



const sections = [
  { title: 'ورزشی', url: '/sport' },
  { title: 'مجلسی', url: '/fashion' },
  { title: 'مردانه', url: '/men' },
  { title: 'زنانه', url: '/women' },
  { title: 'مسافرتی', url: '/travel' },
]


export default function HeaderNavbar() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()
  const [mobileMenu, setMobileMenu] = useState(null)


  return (

    <>
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




      <List
        className={classes.sectionDesktop}
      >
        {
          sections.map((section) => (
            <ListItem key={section.url} disableGutters>
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


      <div className={classes.sectionMobile}>
        <IconButton
          onClick={(event) => setMobileMenu(event.currentTarget)}
        >
          <MoreIcon />
        </IconButton>
      </div>
      <Menu
        anchorEl={mobileMenu}
        open={Boolean(mobileMenu)}
        onClose={() => setMobileMenu(null)}
      >
        {
          sections.map((section) => (
            <MenuItem
              key={section.url}
              component={Link}
              href=''
              onClick={() => setMobileMenu(null)}
            >
              {section.title}
            </MenuItem>
          ))
        }
      </Menu>



    </>





  )
}


