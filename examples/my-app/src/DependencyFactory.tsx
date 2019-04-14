import React from 'react'
import {
  Dependency,
  DependencyProvider,
  createDependencyContext,
} from '@dwerthen/react-dependency-injection'

const { Dependency, DependencyProvider } = createDependencyContext({
  factory: name => props => <p>This is created component named {name}</p>,
})

export default function MyComponent() {
  return (
    <DependencyProvider Button={() => <p>Not factory produced</p>}>
      <Dependency.Button />
      <Dependency.AnotherButton />
      <Dependency.SomeButton />
    </DependencyProvider>
  )
}
