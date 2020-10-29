import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@components/Link'
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
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'
import api from '@services/api'
import ProductArray from '@components/ProductArray'

const cards = [
  {
    title: 'قاشق رنگی',
    description: '',
    image: '/image_template/hue12-photography-rScZlwNBezc-unsplash.jpg',
    imgText: 'main image description',
    priceoff: 600,
    price: 550,
    rate: 4.5,
    reviews: 12,
  },
  {
    title: 'موس',
    description: '',
    image: '/image_template/frankie-valentine-VghbBAYqUJ0-unsplash.jpg',
    imgText: 'main image description',
    priceoff: 600,
    price: 550,
    rate: 4.5,
    reviews: 12,
  },
  {
    title: 'اسپیکر',
    description: '',
    image: '/image_template/alex-hu-at7tuZ_6OlY-unsplash.jpg',
    imgText: 'main image description',
    priceoff: 600,
    price: 550,
    rate: 4.5,
    reviews: 12,
  },
]

export default function FeaturedProducts(props) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  return (



    <ProductArray products={cards} three />






  )
}
