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
import api from '@services/api'
import ProductImage from '@components/Product/ProductImage'
import RatingNumber from '@components/RatingNumber'
import ProductActions from '@components/Product/ProductActions'

export default function ProductSummary() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  return (



    <Grid
      container
      direction='row'
      spacing={3}
    >

      <Grid item xs={12} sm={4}>

        <ProductImage />

      </Grid>


      <Grid item xs={12} sm={8}>

        <ProductActions />

      </Grid>


    </Grid>


  )
}
