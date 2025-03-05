import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './inputSlice'


export function InputData(){
  const inputStore = useSelector(state => state.inputStore.value);
  const count = useSelector(state => state.counter.value)

  const [data, setData] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData(data))
  }, [data])
  return (
    
    <>
    <input type='text' value={data}  onChange={(e) => setData(e.target.value)}></input>
    
      <p>Input Store Value: {inputStore}</p>
      <p> Counter data again<span> {count} </span></p>
    </>
  );
};


