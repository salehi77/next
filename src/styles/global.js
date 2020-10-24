import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return ({
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    endItem: {
      marginRight: theme.direction === 'rtl' ? 'auto' : 'unset',
      marginLeft: theme.direction === 'ltr' ? 'auto' : 'unset',
    },
  })
})

export default useStyles