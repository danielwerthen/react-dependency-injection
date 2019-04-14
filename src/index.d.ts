export as namespace DependencyInjection

export type Props = {
  [key: string]: any
} | null

export type Component = React.SFC<Props>
export type ProviderType = React.SFC<
  React.PropsWithChildren<{
    [key: string]: React.ComponentType | React.ReactNode
  }>
>

export function createDependencyContext<T>(options: {
  defaultDependencies?: { [key: string]: Component }
  factory?: (name: string, context: T) => Component
  factoryContext?: T
  Fallback?: React.ComponentType<{ name: string }>
}): {
  Dependency: { [key: string]: Component }
  DependencyProvider: ProviderType
  useDependency: (name: string) => Component
  dependencyContext: React.Context<{
    dependencies: { [key: string]: Component }
  }>
}

export const Dependency: { [key: string]: Component }
export const DependencyProvider: ProviderType
export const useDependency: (name: string) => Component
export const dependencyContext: React.ContextType<{
  dependencies: { [key: string]: Component }
}>
