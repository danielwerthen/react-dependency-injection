# React dependency injection

This library provides the functionality of dependency injection of React components. For all those times when you want import components during runtime rather than build time.

## Basic usage

```javascript
import React from 'react'
import {
  Dependency,
  DependencyProvider,
} from '@dwerthen/react-dependency-injection'

function MyButton(props: any) {
  return <button style={{ color: 'red' }} {...props} />
}

export default function BasicUsage() {
  return (
    <DependencyProvider Button={MyButton}>
      <Dependency.Button>Click me</Dependency.Button>
    </DependencyProvider>
  )
}
```

## Separate namespaces

If you want to use a separate namespace to encapsulate a set of components, use the function `createDependencyContext`.

```javascript
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
```

## Dependency Factory

When creating a dependencyContext you can also provide a factory function, which creates dependencies lazily if no matching dependency has been provided.

```javascript
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
```
