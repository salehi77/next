import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
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
import Link from '@components/Link'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'
import api from '@services/api'
import CategoryArray from '@components/CategoryArray'

const cards = [
  {
    title: 'لوشن',
    description: '',
    image: '/image_template/deanna-alys-6LBBOwkPzyQ-unsplash.jpg',
    imgText: 'main image description',
  },
  {
    title: 'دوربین',
    description: '',
    image: '/image_template/varun-gaba-dcgB3CgidlU-unsplash.jpg',
    imgText: 'main image description',
  },
  {
    title: 'ساعت‌مچی',
    description: '',
    image: '/image_template/rachit-tank-2cFZ_FB08UM-unsplash.jpg',
    imgText: 'main image description',
  },
  {
    title: 'هدفون',
    description: '',
    image: '/image_template/c-d-x-PDX_a_82obo-unsplash.jpg',
    imgText: 'main image description',
  },
]

export default function FeaturedCategories() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.FeaturedCategories()
      .then(data => {
        setCategories(data)
      })
      .catch((e) => { })
  }, [])

  return (






    <CategoryArray categories={categories} />






  )
}
