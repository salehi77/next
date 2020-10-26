import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
// import Link from '@material-ui/core/Link'
import Link from '@components/Link'
import useStyles from './style'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default function ProductImage(props) {
  const classes = useStyles()

  return (
    <>



      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/background.png"
          title="Contemplative Reptile"
        />
      </Card>




    </>
  )
}
