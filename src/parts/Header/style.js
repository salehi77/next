import { fade, makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appbar: {},
  toolbar: {},
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  buttons: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
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