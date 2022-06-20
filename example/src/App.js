import { ServerSideComponent } from '/features/pageOnly/ServerSideComponent'
import ClientSideComponentA from '/features/pageOnly/ClientSideComponentA.universal'
import ClientSideComponentB from '/features/pageOnly/ClientSideComponentB.universal'

export default function App() {
  return (
    <main>
      <ClientSideComponentA />
      <ServerSideComponent />
      <ClientSideComponentB />
    </main>
  )
}
