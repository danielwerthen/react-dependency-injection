import React from 'react'
import {
  Dependency,
  DependencyProvider,
  createDependencyContext,
} from '@dwerthen/react-dependency-injection'

const {
  Dependency: Dependency2,
  DependencyProvider: DependencyProvider2,
} = createDependencyContext({})

function MyButton(props: any) {
  return <button style={{ color: 'red' }} {...props} />
}
function MyOtherButton(props: any) {
  return <button style={{ color: 'blue' }} {...props} />
}

export default function SeparateNamespace() {
  return (
    <DependencyProvider Button={MyButton}>
      <DependencyProvider2 Button={MyOtherButton}>
        <Dependency.Button>Click me</Dependency.Button>
        <Dependency2.Button>Click me too</Dependency2.Button>
      </DependencyProvider2>
    </DependencyProvider>
  )
}
