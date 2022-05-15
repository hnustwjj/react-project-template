import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counter'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
export default store

// 结合React-Redux，在useSelector时指定State的类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 重写之后的useDispatch和useSelector，在使用时不用声明参数了
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector
