import type { Component, ComponentPublicInstance } from 'vue'
import type { RouterLinkProps } from 'vue-router'

type FilterConstructor<T> = T extends new (...args: any[]) => any ? T : never

export type ComponentInstance = InstanceType<
  FilterConstructor<Component<ComponentPublicInstance>>
>

export interface PrefetchLinkProps extends RouterLinkProps {
  prefetch?: boolean
  prefetchFiles?: string[]
  timeout?: number
}
