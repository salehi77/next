import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Link from '@components/Link'
import useStyles from './style'
import Layout from '@layouts/Layout'
import ProductImage from '@components/ProductImage'
import ProductDetail from '@components/ProductDetail'


export default function Product() {
  const classes = useStyles()



  return (
    <Layout>

      <Paper className={classes.paper}>

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

          <Grid item xs={4}>

            <ProductImage />

          </Grid>


          <Grid item xs={8}>

            <ProductDetail />

          </Grid>


        </Grid>


      </Paper>

    </Layout>
  )
}