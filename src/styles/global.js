import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return ({
    hidden: {
      display: 'none',
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    endItem: {
      marginRight: theme.direction === 'rtl' ? 'auto' : 'unset',
      marginLeft: theme.direction === 'ltr' ? 'auto' : 'unset',
    },
  })
})

export default useStyles