import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    // '& header': {
    //   flex: '0 1 auto',
    // },
    // '& main': {
    //   flex: '1 1 auto',
    // },
    // '& footer': {
    //   flex: '0 1 auto',
    // },
  },
  main: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
}))

export default useStyles