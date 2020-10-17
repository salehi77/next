import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import Link from '@material-ui/core/Link'
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
]

export default function FeaturedCategories(props) {
  const classes = useStyles()

  return (



    <Container className={classes.cardGrid} maxWidth='lg'>

      <Paper elevation={4} className={classes.paper}>

        <Typography className={classes.title} variant='h4'>
          Featured Categories
        </Typography>


        <Grid container spacing={4}>

          {cards.map((card) => (

            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant='outlined'>
                <CardActionArea as={Link}>
                  <CardHeader
                    title={<Typography align='center'>Shrimp</Typography>}
                  />
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title='Image title'
                  />
                </CardActionArea>
              </Card>
            </Grid>

          ))}

        </Grid>


      </Paper>


    </Container>




  )
}
