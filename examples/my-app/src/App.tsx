import React, { Component } from 'react'
import './App.css'
import {
  DependencyProvider,
  Dependency as DI,
  dependencyFactory,
} from './react-dependency-injection'

function Bar() {
  return (
    <>
      <DI.Baz />
      <DI.Foo />
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
        <DI.Foo world="world foobar" />
        <DI.Bar />
      </DependencyProvider>
    )
  }
}

export default App
