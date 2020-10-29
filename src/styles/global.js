import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  console.log(theme)

  return ({
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    endItem: theme.direction === 'ltr' ?
      { marginLeft: 'auto' } :
      { marginRight: 'auto' },
    hidden: {
      [theme.breakpoints.up('md')]: {},
      display: 'none',
    },
  })
})

export default useStyles