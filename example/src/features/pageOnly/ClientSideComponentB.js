import { useGlobalPageState } from '@kaliber/use-global-page-state'
import { Counter } from '/features/buildingBlocks/Counter'

export function ClientSideComponentB() {
  const [count, setCount] = useGlobalPageState('counter')
  return (
    <section>
      <h2>Client side component A</h2>
      <Counter value={count ?? 0} onChange={() => setCount(x => (x ?? 0) + 1)} />
    </section>
  )
}
