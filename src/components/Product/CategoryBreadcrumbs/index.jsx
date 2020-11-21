import { useContext, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Link from '@components/Link'
import Layout from '@layouts/Layout'
import useGlobalStyle from '@styles/global'
import useStyles from './style'
import clsx from 'clsx'
import api from '@services/api'
import { ProductContext } from '@contexts/index'



export default function CategoryBreadcrumbs() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()
  const product = useContext(ProductContext)
  const [values, setValues] = useState([])

  useEffect(() => {
    if (product && product.category) {
      let category = product.category
      let myarray = []
      while (category.parent) {
        category = category.parent
        myarray.unshift(category)
      }
      setValues(myarray)
    }
  }, [product])


  return (


    <Breadcrumbs>
      {
        values.map((value) => (
          <Link key={value.slug_title} href={`/category/${value.slug_title}`} color='inherit'>
            {value.title}
          </Link>
        ))
      }
      {product && product.category &&
        <Link
          href={`/category/${product.category.slug_title}`}
          color='textPrimary'
        >
          {product.category.title}
        </Link>
      }
    </Breadcrumbs>

  )
}
