import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Link from '@components/Link'
import useStyles from './style'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { ProductContext } from '@contexts/index'


export default function ProductImage() {
  const classes = useStyles()
  const product = useContext(ProductContext)

  return (
    <>



      <Card>
        <CardMedia
          className={classes.media}
          image={product?.image || 'string'}
          title={product?.imageAlt}
        />
      </Card>




    </>
  )
}
