

import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export default function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'کپی-رایت © '}
      <MuiLink color='inherit' href='https://material-ui.com/'>
        Material UI
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
