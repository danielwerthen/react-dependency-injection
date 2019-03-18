import React from 'react'

function MetaObject() {}

MetaObject.prototype = new Proxy(MetaObject.prototype, {
  get: function get(target, property, receiver) {
    if (Reflect.has(receiver, 'methodMissing')) {
      var method = receiver.methodMissing(property)
      if (method !== void 0) {
        Reflect.defineProperty(Reflect.getPrototypeOf(receiver), property, {
          value: method,
        })
      }
      return method
    }
  },
})

export function dependencyFactory({
  defaultDependencies = {},
  factory,
  factoryContext = {},
}) {
  const dependencyContext = React.createContext({
    dependencies: defaultDependencies,
  })

  const factoryCache = {}

  class DependencyStore extends MetaObject {
    methodMissing(property) {
      const Component = props => {
        const DComponent = useDependency(property)
        return <DComponent {...props} />
      }
      Object.defineProperty(Component, 'name', {
        value: property,
        writable: false,
        enumerable: false,
        configurable: true,
      })
      return Component
    }
  }

  const Dependency = new DependencyStore()

  function DependencyProvider({ children, ...dependencies }) {
    return (
      <dependencyContext.Provider value={{ dependencies }}>
        {children}
      </dependencyContext.Provider>
    )
  }

  function useDependency(name) {
    const { dependencies } = React.useContext(dependencyContext)
    if (!factory) {
      return dependencies[name]
    }
    if (dependencies[name]) {
      return dependencies[name]
    }
    if (!factoryCache[name]) {
      return (factoryCache[name] = factory(name, factoryContext))
    }
    return factoryCache[name]
  }

  return {
    Dependency,
    DependencyProvider,
    useDependency,
    dependencyContext,
  }
}

const {
  Dependency,
  DependencyProvider,
  useDependency,
  dependencyContext,
} = dependencyFactory()

export { Dependency, DependencyProvider, useDependency, dependencyContext }
