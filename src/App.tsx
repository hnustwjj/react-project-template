import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import Router from '@/router'
import { add, sub } from './store/features/counter'
import { RootState } from './store'

function App() {
  // 结合RootState可以定义类型（默认state类型是unknown）
  const { count } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App flex flex-col justify-center h-[100vh] items-center">
      count:{count}
      <Button onClick={() => dispatch(add(1))}> +1 </Button>
      <Button onClick={() => dispatch(sub())}> -1 </Button>
      <Router />
    </div>
  )
}

export default App
