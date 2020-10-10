import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import MainFeaturedPost from '@parts/MainFeaturedPost'
import Main from '@parts/Main'
import Sidebar from '@parts/Sidebar'
import Layout from '@layouts/Layout'


export default function Index() {
  const classes = useStyles()

  return (
    <Layout>
      {/* <MainFeaturedPost />
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title='From the firehose' />
        <Sidebar />
      </Grid> */}
    </Layout>
  )
}