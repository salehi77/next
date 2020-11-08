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
import FeaturedProduct from '@components/FeaturedProduct'
import FeaturedProducts from '@components/FeaturedProducts'
import FeaturedCategories from '@components/FeaturedCategories'
import Layout from '@layouts/Layout'


export default function Home() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()


  return (
    <Layout>

      <FeaturedProduct />

      <Container className={classes.container}>

        <Paper className={classes.paper}>

          <Typography className={classes.title} variant='h4' component='div'>
            دسته‌های برگزیده
          </Typography>


          <FeaturedCategories />

        </Paper>


        <Paper className={classes.paper}>


          <Typography className={classes.title} variant='h4' component='div'>
            محصولات برگزیده
          </Typography>


          <FeaturedProducts />

        </Paper>


      </Container>

    </Layout>
  )
}