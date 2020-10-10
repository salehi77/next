import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appbar: {},
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  buttons: {
    alignSelf: 'flex-end',
    marginBottom: 8,
    paddingLeft: '4rem',
  },
}))

export default useStyles