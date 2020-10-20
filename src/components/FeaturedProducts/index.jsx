import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@components/Link'
import useStyles from './style'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import StarRateIcon from '@material-ui/icons/StarRate'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';


const cards = [
  {
    title: 'Colored Spoon',
    description: '',
    image: '/images/hue12-photography-rScZlwNBezc-unsplash.jpg',
    imgText: 'main image description',
    priceoff: 600,
    price: 550,
    rate: 4.5,
    reviews: 12,
  },
  {
    title: 'Mouse',
    description: '',
    image: '/images/frankie-valentine-VghbBAYqUJ0-unsplash.jpg',
    imgText: 'main image description',
    priceoff: 600,
    price: 550,
    rate: 4.5,
    reviews: 12,
  },
  {
    title: 'Speaker',
    description: '',
    image: '/images/alex-hu-at7tuZ_6OlY-unsplash.jpg',
    imgText: 'main image description',
    priceoff: 600,
    price: 550,
    rate: 4.5,
    reviews: 12,
  },
]

export default function FeaturedProducts(props) {
  const classes = useStyles()

  return (


    <Container className={classes.cardGrid} maxWidth='lg'>

      <Paper elevation={4} className={classes.paper}>

        <Grid container spacing={4}>

          {
            cards.map((card) => (

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} variant='outlined'>
                  <CardActionArea as={Link} href={'/product'}>

                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title='Image title'
                    />

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.title}
                      </Typography>
                      <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid item>
                          <Typography className={classes.priceoff}>
                            {card.priceoff}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.price} variant='h6'>
                            {card.price}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.rateGrid}>
                          <Typography className={classes.rate}>
                            {card.rate}
                          </Typography>
                          <StarRateIcon />
                        </Grid>
                      </Grid>
                    </CardContent>

                  </CardActionArea>


                  <CardActionArea>

                    <CardActions >
                      <Typography>{card.reviews} Reviews</Typography>

                      <ChevronRightRoundedIcon />

                    </CardActions>

                  </CardActionArea>

                </Card>
              </Grid>

            ))
          }

        </Grid>


      </Paper>


    </Container>




  )
}
