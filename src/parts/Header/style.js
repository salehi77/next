import { fade, makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appbar: {},
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  buttons: {
    [theme.breakpoints.up('md')]: {
    },
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
    justifyContent: 'center',
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