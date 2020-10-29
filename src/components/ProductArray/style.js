import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  priceoff: {
    color: theme.palette.text.secondary,
    textDecoration: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
}))

export default useStyles