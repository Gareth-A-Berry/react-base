import React, { lazy, Suspense } from 'react'
import Typography from '@components/Typography';

const enhancedRoute = (name) => {
  const Component = lazy(() => import(`../../../pages/${name}`))

  return class extends React.Component {
    render() {
      return (
        <Suspense fallback={<Typography>Loading</Typography>}>
          <Component />
        </Suspense>
      )
    }
  }
}

export { enhancedRoute }
