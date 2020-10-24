import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[800],
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: 400,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.3)',
    minHeight: 400,
  },
  postContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  price: {
    // fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  priceoff: {
    color: theme.palette.text.secondary,
    textDecoration: 'line-through',
  },
}))

export default useStyles