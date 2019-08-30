import React from 'react'
import { Routes } from 'src/typings/component'
import { Route, Redirect } from 'react-router-dom'

function SubRoutes(route: Routes, index?: string | number) {
  const { component } = route
  if (route.redirect) {
    return <Redirect key={index} exact={true} from={route.path} to={route.redirect} />
  }
  return (
    <Route
      key={index}
      path={route.path}
      render={props => {
        // pass the sub-routes down to keep nesting
        return component && component({ ...props, routes: route.children })
      }}
    />
  )
}

export default SubRoutes
