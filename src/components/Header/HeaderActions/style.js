import { fade, makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appbar: {},
  toolbar: {},
  toolbarLink: {
    flexShrink: 0,
  },
  actions: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  avatar: {
  },



  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

export default useStyles