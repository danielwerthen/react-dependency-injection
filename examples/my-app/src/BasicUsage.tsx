import React from 'react'
import {
  Dependency,
  DependencyProvider,
} from '@dwerthen/react-dependency-injection'

function MyButton(props: any) {
  return <button style={{ color: 'red' }} {...props} />
}

export default function MyComponent() {
  return (
    <DependencyProvider Button={MyButton}>
      <Dependency.Button>Click me</Dependency.Button>
    </DependencyProvider>
  )
}
