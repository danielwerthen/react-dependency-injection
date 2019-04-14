import React from 'react'
import { createDependencyContext } from '@dwerthen/react-dependency-injection'

const { Dependency, DependencyProvider } = createDependencyContext({
  factory: name => props => <p>This is created component named {name}</p>,
})

export default function DependencyFactory() {
  return (
    <DependencyProvider Button={() => <p>Not factory produced</p>}>
      <Dependency.Button />
      <Dependency.AnotherButton />
      <Dependency.SomeButton />
    </DependencyProvider>
  )
}
