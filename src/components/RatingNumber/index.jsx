import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import TelegramIcon from '@material-ui/icons/Telegram'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkIcon from '@material-ui/icons/Link'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Link from '@components/Link'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'

export default function RatingNumber({ rate, single }) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  return (
    <span className={classesBase.flexRow}>
      {
        !single
          ?
          <Rating name='read-only' value={rate} readOnly size='small' />
          :
          <Rating name='read-only' value={1} readOnly size='small' max={1} />
      }
      <Typography variant='caption' className={classes.number}>
        {rate}
      </Typography>
    </span>
  )
}

RatingNumber.propTypes = {
  rate: PropTypes.number.isRequired,
  single: PropTypes.bool,
}

