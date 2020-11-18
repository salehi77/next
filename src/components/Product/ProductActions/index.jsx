import { useContext, useState, useEffect } from 'react'
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
import RatingNumber from '@components/RatingNumber'
import { ProductContext } from '@contexts/index'

export default function ProductActions() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()
  const product = useContext(ProductContext)

  return (


    <Grid
      container
      direction='column'
      spacing={2}
    >



      <Grid item className={classesBase.flexRow}>
        <div>
          <Typography variant='h4'>
            {product?.title}
          </Typography>
          <RatingNumber rate={product?.average_rate || 0} />
        </div>
        <div className={clsx(classesBase.endItem, classesBase.flexColumn)}>
          <FavoriteIcon className={classesBase.endItem} />
          <div>
            <TelegramIcon />
            <InstagramIcon />
            <LinkIcon />
          </div>
        </div>
      </Grid>



      <Grid item>

        <Grid container spacing={1} alignItems='center'>
          <Grid item>
            <Typography className={classes.price}>
              {product?.discount > 0 ? product.price - product.price * product.discount / 100 : product?.price}
            </Typography>
          </Grid>
          <Grid item className={clsx(!product?.discount > 0 && classesBase.hidden)}>
            <Typography className={classes.priceoff}>
              {product?.price}
            </Typography>
          </Grid>
        </Grid>

      </Grid>



      <Grid item>

        <Typography component='span'>
          {product?.description}
        </Typography>


      </Grid>

      <Grid item>


        <Button
          variant='contained'
          color='default'
          className={classes.addToCart}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>

        <Button
          variant='contained'
          color='default'
          className={classes.buyNow}
          startIcon={<ShoppingCartIcon />}
          size='large'
        >
          Buy Now
        </Button>


      </Grid>


    </Grid>
  )
}
