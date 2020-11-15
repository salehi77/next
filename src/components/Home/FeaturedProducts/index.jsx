import { useState, useEffect } from 'react'
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



export default function FeaturedProducts(props) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.FeaturedProducts()
      .then(data => {
        setProducts(data)
      })
      .catch((e) => { })
  }, [])


  return (



    <ProductArray products={products} three />






  )
}
