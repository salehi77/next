import { useContext, useState, useEffect } from 'react'
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
import StarRateIcon from '@material-ui/icons/StarRate'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import Link from '@components/Link'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'




export default function CategoryArray(props) {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  // c = 3 => 12/c = 4   12/(c-1) = 6
  // c = 4 => 12/c = 3   12/(c-1) = 4
  const grid = props.three ? { sm: 6, md: 4 } : { sm: 4, md: 3 }

  return (


    <Grid container spacing={4}>

      {
        props.categories.map((card) => (

          <Grid key={card.slug_title} item xs={12} {...grid}>
            <Card className={classes.card} variant='outlined'>

              <Link href={`/category/${card.slug_title}`} component={CardActionArea}>

                <CardHeader
                  title={<Typography align='center'>{card.title}</Typography>}
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.imageAlt}
                />

              </Link>

            </Card>
          </Grid>

        ))
      }

    </Grid>






  )
}



CategoryArray.propTypes = {
  categories: PropTypes.array.isRequired,
  three: PropTypes.bool,
}