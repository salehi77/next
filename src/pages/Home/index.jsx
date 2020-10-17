import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import FeaturedProduct from '@components/FeaturedProduct'
import FeaturedProducts from '@components/FeaturedProducts'
import FeaturedCategories from '@components/FeaturedCategories'
import Layout from '@layouts/Layout'


export default function Index() {
  const classes = useStyles()

  return (
    <Layout>
      <FeaturedProduct />
      <FeaturedCategories />
      <FeaturedProducts />
    </Layout>
  )
}