import { useState } from 'react'
import Card from './component/card';

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className=' text-black p-4 rounded-xl mt-40    ml-[50%] items-center justify-center  text-4xl uppercase  '>Tailwind test</h1>
      <div className='flex gap-10 items-center  p-6 justify-center h-screen'>
        <Card username="chaiaurcode" btnText="click me" age='43' gender='female'/>
        <Card username="hitesh" age='21' gender="male" />
        <Card username="hitesh" age='56'/>
        <Card username="hitesh" age='53' />
      </div>
    </>
  )
}

export default App