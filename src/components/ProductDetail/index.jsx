import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'
import Rating from '@material-ui/lab/Rating'
import Favorite from '@material-ui/icons/Favorite'
import Link from '@components/Link'
import useStyles from './style'


export default function FeaturedProduct(props) {
  const classes = useStyles()

  return (


    <Grid
      container
      direction='column'
    >

      <Grid item>

        <Typography variant='h4'>
          product name
          <Favorite />
        </Typography>


      </Grid>

      <Grid item>

        <Rating name="read-only" value={3} readOnly />

      </Grid>


      <Grid item>

        <Typography component='span'>
          500
        </Typography>
        <Typography component='span'>
          600
        </Typography>
        <Typography component='span'>
          24%
        </Typography>

      </Grid>



      <Grid item>

        <Typography component='span'>
          product description product description product description
          product description product description product description
          product description product description product description
        </Typography>


      </Grid>



      {/* <Grid item>
        <Paper>
          <Grid container >
            {
              colors.map((color) => (
                <Grid item>
                  <Box style={{ backgroundColor: color, padding: 15, borderRadius: '50%', border: '1px solid' }} />
                </Grid>
              ))
            }
          </Grid>
        </Paper>
      </Grid> */}




      <Grid item container>



        {/* <ButtonGroup color="primary" aria-label="outlined primary button group"> */}
        <Button>One</Button>
        {/* <Button>Two</Button> */}
        <Typography style={{ textAlign: 'center' }}>89</Typography>
        <Button>Three</Button>
        {/* </ButtonGroup> */}

      </Grid>

    </Grid>
  )
}
