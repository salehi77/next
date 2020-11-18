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
import { UserContext } from '@contexts/index'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'






export default function HeaderActions() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()
  const { user, setUser } = useContext(UserContext)
  const [avatarMenu, setAvatarMenu] = useState(null)


  return (


    <Grid container justify='flex-end'>


      <Grid item className={clsx(user && classesBase.hidden)}>
        <Button size='small' href='/signin' as={Link}>
          ورود
        </Button>
        <Button size='small' variant='outlined' color='primary' href='/signup' as={Link}>
          ثبت‌نام
        </Button>
      </Grid>



      <Grid item className={clsx(!user && classesBase.hidden)}>
        <Button style={{ minWidth: 0, borderRadius: '50%' }}
          onClick={(event) => setAvatarMenu(event.currentTarget)}
        >
          <Avatar className={classes.avatar} alt={user?.email} src={user?.avatar} />
        </Button>
        <Menu
          anchorEl={avatarMenu}
          open={Boolean(avatarMenu)}
          onClose={() => setAvatarMenu(null)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Bookmarks</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Grid>


    </Grid>


  )
}


