import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import inputReducer from './features/input/inputSlice'
import CardReducer from './features/card/CardSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    inputStore: inputReducer,
    card: CardReducer
  }
})