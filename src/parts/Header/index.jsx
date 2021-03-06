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
import HeaderActions from '@components/Header/HeaderActions'
import HeaderNavbar from '@components/Header/HeaderNavbar'





export default function Header({ simple }) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()


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

            <HeaderNavbar />

          </Grid>



          <Grid item xs={12} md={3} className={clsx([classes.actions, simple && classesBase.hidden])}>

            <HeaderActions />

          </Grid>


        </Grid>

      </Toolbar>

    </AppBar>
  )
}



Header.propTypes = {
  simple: PropTypes.bool,
}