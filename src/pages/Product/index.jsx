import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Link from '@components/Link'
import Layout from '@layouts/Layout'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'
import api from '@services/api'
import ProductSummary from '@components/ProductSummary'
import ProductDetail from '@components/ProductDetail'
import RelatedProducts from '@components/RelatedProducts'
import ProductReviews from '@components/ProductReviews'


export default function Product() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()



  return (
    <Layout>

      <Container className={classes.container}>

        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href=''>
            Material-UI
          </Link>
          <Link color='inherit' href=''>
            Core
          </Link>
          <Typography color='textPrimary'>Breadcrumb</Typography>
        </Breadcrumbs>



        <ProductSummary />



        <Paper className={classes.paper}>

          <Typography className={classes.title} variant='h4' component='div'>
            جزئیات فنی
          </Typography>

          <ProductDetail />

        </Paper>

        <Paper className={classes.paper}>

          <Typography className={classes.title} variant='h4' component='div'>
            محصولات مشابه
          </Typography>


          <RelatedProducts />

        </Paper>

        <Paper className={classes.paper}>

          <Typography className={classes.title} variant='h4' component='div'>
            نظرات
          </Typography>


          <ProductReviews />

        </Paper>


      </Container>

    </Layout>
  )
}