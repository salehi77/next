import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import Link from '@material-ui/core/Link'
import Link from '@components/Link'
import useStyles from './style'



const post = {
  title: 'Shoes Shop',
  description: 'New Offers and Discounts',
  image: '/images/imani-bahati-LxVxPA1LOVM-unsplash.jpg',
  imgText: 'main image description',
}

export default function FeaturedProduct(props) {
  const classes = useStyles()

  return (
    <Paper className={classes.background} style={{ backgroundImage: `url(${post.image})` }}>

      <Grid container className={classes.overlay}>
        <Grid item md={6}>
          <div className={classes.postContent}>
            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {post.description}
            </Typography>
            <Link variant='subtitle1' href=''>
              Visit The Page...
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
