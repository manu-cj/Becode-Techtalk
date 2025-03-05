import { createSlice } from '@reduxjs/toolkit'


export const CardSlice = createSlice({
    name: 'card',
    initialState: {
        items : [
            {article: "pommes", price: 3.14},
            {article: "Poire", price: 7.17},
            {article: "Carotte", price: 6.28},
        ],
        count : 0
    },
    reducers: {
        increment: state => {
            state.count += 1
          },
          decrement: state => {
            state.count -= 1
          },
          addItem: (state, action) => {
            state.card.push(action.payload);
          },
    
    }
})

export const { increment, decrement, addItem} = CardSlice.actions
export default CardSlice.reducer