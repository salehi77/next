import Product from '@pages/Product'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ProductContext } from '@contexts/index'
import api from '@services/api'

const ContextProvider = () => {
  const router = useRouter()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (router.query.slug)
      api.productBySlug(router.query.slug)
        .then((data) => { setProduct(data) })
        .catch((error) => { })
  }, [router.query])

  return (
    <ProductContext.Provider value={product}>
      <Product />
    </ProductContext.Provider>
  )
}

export default ContextProvider