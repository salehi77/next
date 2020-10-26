import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Link from '@components/Link'
import Layout from '@layouts/Layout'
import ProductImage from '@components/ProductImage'
import ProductSummary from '@components/ProductSummary'
import ProductDetail from '@components/ProductDetail'
import useStyles from './style'


export default function Product() {
  const classes = useStyles()



  return (
    <Layout>

      <Container>

        {/* <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs> */}


        <Grid
          container
          direction='row'
          spacing={3}
        >

          <Grid item xs={12} sm={4}>

            <ProductImage />

          </Grid>


          <Grid item xs={12} sm={8}>

            <ProductSummary />

          </Grid>


        </Grid>

        <ProductDetail />



      </Container>

    </Layout>
  )
}