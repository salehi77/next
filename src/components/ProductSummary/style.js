import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  price: {
    fontSize: '1.5rem',
  },
  priceoff: {
    color: theme.palette.text.secondary,
    textDecoration: 'line-through',
  },
  addToCart: {},
  buyNow: {
    backgroundColor: '#28dd28',
    margin: 5,
    '&:hover': {
      backgroundColor: '#22bb22',
    },
  },
}))

export default useStyles