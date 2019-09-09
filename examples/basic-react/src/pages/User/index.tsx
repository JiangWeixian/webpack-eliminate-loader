import React from 'react'
import { Routes } from 'src/typings/component'

interface PageProps {
  routes?: Routes[]
}

class User extends React.Component<PageProps> {
  render() {
    return <div>this is a user page</div>
  }
}

export default User
