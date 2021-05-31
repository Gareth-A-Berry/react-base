import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Typography.scss'

const Typography = ({
  size,
  weight,
  className,
  error,
  uppercase,
  children
}) => {
  const typographyProps = cx(
    styles.typography,
    {
      [styles[`typography--${size}`]]: true,
      [styles[`typography--${weight}`]]: true,
      [styles['typography--error']]: error,
      [styles['typography--caps']]: uppercase,
    },
    className
  )

  return <p className={typographyProps}>{children}</p>
}

Typography.defaultProps = {
  className: '',
  size: 'md',
  weight: 'normal',
  error: false,
  uppercase: false,
}

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'xxs',
    'xs',
    'ssm',
    'sm',
    'md',
    'lg',
    'xl',
    'sxl',
    'mxl',
    'mxxxl',
    'xxl',
    'sxxl',
    'xxxl',
    'xxxxl',
  ]),
  weight: PropTypes.oneOf(['light', 'normal', 'semi-bold', 'bold']),
  error: PropTypes.bool,
  uppercase: PropTypes.bool,
}

export default Typography
