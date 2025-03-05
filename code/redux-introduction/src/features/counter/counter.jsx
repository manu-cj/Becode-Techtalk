import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span style={{margin: "15px", fontSize: "large"}}> {count} </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br></br>
        <button onClick={() => {dispatch(incrementByAmount(3))}}>increment By Amount</button>
        
      </div>
    </>
  )
}