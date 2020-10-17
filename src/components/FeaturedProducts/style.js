import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
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
    // font
  },
  rate: {
  },
  rateGrid: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
}))

export default useStyles