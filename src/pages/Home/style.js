import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
  })
})

export default useStyles