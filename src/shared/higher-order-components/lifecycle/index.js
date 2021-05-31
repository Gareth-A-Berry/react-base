import React, { Component } from 'react'

export default ({ didMount, shouldUpdate, didUpdate, willUnmount }) => (
  WrappedComponent
) =>
  class Lifecycle extends Component {
    componentDidMount() {
      if (!didMount) return
      this.props[didMount]()
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (!shouldUpdate) return true
      return this.props[shouldUpdate](nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
      if (!didUpdate) return
      this.props[didUpdate](prevProps, prevState)
    }

    componentWillUnmount() {
      if (!willUnmount) return
      this.props[willUnmount]()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
