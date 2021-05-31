import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Example.scss'

const ExampleComponent = ({
  get,
  post,
  exampleProp,
  handlePostRequest,
  handleGetRequest,
}) => {
  const [someState, setSomeState] = useState('')

  useEffect(() => {
    handlePostRequest()
    handleGetRequest()
    setSomeState('Mounted')
  }, [])

  return (
    <div className={styles['example-class']}>
      {`Example component mounted with prop ${exampleProp} and has local state ${someState}`}
      &nbsp;
      {`Redux get prop ${get}, Redux post prop ${post}`}
    </div>
  )
}

ExampleComponent.defaultProps = {
  exampleProp: '',
  get: '',
  post: '',
  handleGetRequest: () => {},
  handlePostRequest: () => {},
}

ExampleComponent.propTypes = {
  exampleProp: PropTypes.string,
  get: PropTypes.string,
  post: PropTypes.string,
  handleGetRequest: PropTypes.func,
  handlePostRequest: PropTypes.func,
}

export default ExampleComponent
