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

export default function ProductSummary(props) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  return (


    <Grid
      container
      direction='column'
      spacing={2}
    >



      <Grid item className={classesBase.flexRow}>
        <div>
          <Typography variant='h4' className={classes.rate}>
            Name
          </Typography>
          <div>
            <Rating name='read-only' value={3} readOnly size='small' />
            <Typography variant='caption'>4.5</Typography>
          </div>
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
              550
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.priceoff}>
              600
            </Typography>
          </Grid>
        </Grid>

      </Grid>



      <Grid item>

        <Typography component='span'>
          product description product description product description
          product description product description product description
          product description product description product description
        </Typography>


      </Grid>

      <Grid item>


        <Button
          variant="contained"
          color="default"
          className={classes.addToCart}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>

        <Button
          variant="contained"
          color="default"
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
