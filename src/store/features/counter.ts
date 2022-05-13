import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type state = {
  count: number
}
const initialState: state = {
  count: 0
}
// createSlice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 会默认传入state和action
    add(state: state, action: PayloadAction<number>) {
      state.count = state.count + action.payload
    },
    //内置了immutable.js 可以直接修改
    sub(state: state) {
      state.count -= 1
    }
  }
})

export const { add, sub } = counterSlice.actions
export default counterSlice.reducer
