import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'
import Rating from '@material-ui/lab/Rating'
import Favorite from '@material-ui/icons/Favorite'
import Link from '@components/Link'
import useStyles from './style'
import useGlobalStyle from '@styles/global'
import clsx from 'clsx'

export default function FeaturedProduct(props) {
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
        <Favorite className={classesBase.endItem} />
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



    </Grid>
  )
}
