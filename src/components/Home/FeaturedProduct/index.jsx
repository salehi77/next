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



const post = {
  title: 'مارکت کفش',
  description: 'پیشنهادها و تخفیف‌های جدید',
  image: '/image_template/imani-bahati-LxVxPA1LOVM-unsplash.jpg',
  imgText: 'main image description',
}

export default function FeaturedProduct(props) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  return (
    <div className={classes.background} style={{ backgroundImage: `url(${post.image})` }}>

      <Grid container className={classes.overlay}>
        <Grid item md={6}>
          <div className={classes.postContent}>
            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {post.description}
            </Typography>
            <Link href='' variant='subtitle1'>
              مشاهده صفحه...
            </Link>
          </div>
        </Grid>
      </Grid>

    </div>
  )
}
