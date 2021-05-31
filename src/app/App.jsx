import React from 'react'
import { Route, Router, Switch } from 'react-router';
import { routes } from '@routes/index';
import history from '@setup/history'

const App = () => {
  return (
    <Router history={history}>
      <>
        <Switch>
          {routes.map(({ isPrivate, ...route }, i) => {
            return isPrivate ? (
              <></>
            ) : (
              <Route key={i} {...route} />
            )
          })}
        </Switch>
      </>
    </Router>
  )
}

export default App
