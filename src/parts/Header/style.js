import { fade, makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appbar: {},
  toolbar: {},
  actions: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
  },
}))

export default useStyles