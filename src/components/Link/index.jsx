import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'


function Link({ innerRef, href, component: Component, ...props }) {

  Component = Component || MuiLink

  return (
    <NextLink href={href} passHref>
      <Component {...props} ref={innerRef} />
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />)