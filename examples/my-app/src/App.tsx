import React, { Component, ReactNode, ReactElement, ReactChild } from 'react'
import logo from './logo.svg'
import './App.css'
import { DependencyProvider, Dependency } from '../../../src/index'

class App extends Component {
  render() {
    return <DependencyProvider foo={() => <p>Hola</p>}>5</DependencyProvider>
  }
}

export default App
