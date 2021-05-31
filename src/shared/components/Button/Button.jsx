import React from 'react'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@material-ui/core';
import styles from './Button.scss'

const Button = ({ children, ...props }) => (
  <MuiButton className={styles['button']} color="primary" {...props}>{children}</MuiButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button
