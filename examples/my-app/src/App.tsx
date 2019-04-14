import React, { Component } from 'react'
import './App.css'
import BasicUsage from './BasicUsage'
import SeparateNamespace from './SeparateNamespace'
import DependencyFactory from './DependencyFactory'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BasicUsage />
        <SeparateNamespace />
        <DependencyFactory />
      </React.Fragment>
    )
  }
}

export default App
