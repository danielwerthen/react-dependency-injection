import React, { Component } from 'react'
import './App.css'
import {
  DependencyProvider,
  Dependency,
} from './react-dependency-injection'

function Bar() {
  return (
    <>
      <Dependency.Baz />
      <Dependency.Foo />
    </>
  )
}

class App extends Component {
  render() {
    return (
      <DependencyProvider
        Bar={Bar}
        Baz={() => 'Baz'}
        Foo={({ world }: { world: string }) => <p>Hola {world}</p>}
      >
        <Dependency.Foo world="world foobar" />
        <Dependency.Bar />
      </DependencyProvider>
    )
  }
}

export default App
