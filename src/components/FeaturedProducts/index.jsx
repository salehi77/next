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
    title: 'Title of a longer featured blog post',
    description:
      'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this post s contents.',
    image: '/background.png',
    imgText: 'main image description',
    linkText: 'Continue reading...',
  },
  {
    title: 'Title of a longer featured blog post',
    description:
      'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this post s contents.',
    image: '/background.png',
    imgText: 'main image description',
    linkText: 'Continue reading...',
  },
  {
    title: 'Title of a longer featured blog post',
    description:
      'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this post s contents.',
    image: '/background.png',
    imgText: 'main image description',
    linkText: 'Continue reading...',
  },
  {
    title: 'Title of a longer featured blog post',
    description:
      'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this post s contents.',
    image: '/background.png',
    imgText: 'main image description',
    linkText: 'Continue reading...',
  },
  {
    title: 'Title of a longer featured blog post',
    description:
      'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this post s contents.',
    image: '/background.png',
    imgText: 'main image description',
    linkText: 'Continue reading...',
  },
  {
    title: 'Title of a longer featured blog post',
    description:
      'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this post s contents.',
    image: '/background.png',
    imgText: 'main image description',
    linkText: 'Continue reading...',
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
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                    </Typography>
                      <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid item>
                          <Typography className={classes.priceoff}>
                            600
                        </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.price} variant='h6'>
                            500
                        </Typography>
                        </Grid>
                        <Grid item className={classes.rateGrid}>
                          <Typography className={classes.rate}>
                            4.5
                        </Typography>
                          <StarRateIcon />
                        </Grid>
                      </Grid>
                    </CardContent>

                  </CardActionArea>


                  <CardActionArea>

                    <CardActions >
                      <Typography>12 Reviews</Typography>

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
