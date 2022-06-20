# @kaliber/use-global-page-state
Module based state that allows communication between different client React 'islands' on the same page.

## Motivation
With @kaliber/build it has become easy to serve a React page component server side and only mount components client side when they contain interactivity. The downside of this, is that these interactive parts live on theire own isolated islands: they can't easily communicate. This library introduces the `useGlobalPageState` hook, which works comparable to React's `useState`, but syncs state between uses of this hook that provide the same id.

## Installation

```
yarn add @kaliber/use-global-page-state
```

## Usage

*Home.js*
```jsx
import { ServerSideComponent } from '/features/pageOnly/ServerSideComponent'
import ClientSideComponentA from '/features/pageOnly/ClientSideComponentA.universal'
import ClientSideComponentB from '/features/pageOnly/ClientSideComponentB.universal'

export function Home() {
  return (
    <main>
      <ClientSideComponentA />
      <ServerSideComponent />
      <ClientSideComponentB />
    </main>
  )
}
```

*ClientSideComponentA.js*
```jsx
import { useGlobalPageState } from '@kaliber/use-global-page-state'

export function ClientSideComponentA() {
  const [state, setState] = useGlobalPageState('unique-id')
  return (
    <section>
      {/* ... */}
    </section>
  )
}
```

*ClientSideComponentB.js*
```jsx
import { useGlobalPageState } from '@kaliber/use-global-page-state'

export function ClientSideComponentA() {
  const [state, setState] = useGlobalPageState('unique-id')
  return (
    <section>
      {/* ... */}
    </section>
  )
}
```

---

![](https://media.giphy.com/media/find-a-good-gif/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
