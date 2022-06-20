export function Counter({ value, onChange }) {
  return (
    <div>
      <div>Count: {value}</div>
      <button onClick={() => onChange(value + 1)}>+1</button>
    </div>
  )
}
