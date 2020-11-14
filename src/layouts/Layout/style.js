import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  main: {
    flexGrow: 1,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
}))

export default useStyles