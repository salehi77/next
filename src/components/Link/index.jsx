import PropTypes from 'prop-types'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'


const NextComposed = function ({ as, href, ...props }) {
  return (
    <NextLink href={href} as={as}>
      <a {...props} style={{ textDecoration: 'none' }} />
    </NextLink>
  )
}


function Link(props) {
  return (
    <MuiLink component={NextComposed}  {...props} />
  )
}


export default Link