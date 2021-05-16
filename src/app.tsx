import React from 'react'
interface Props{
  name: String
  age: Number
}

const App: React.FC<Props> = (props:Props) => {
  return <div className="App">{`我是${props.name},我今年${props.age}岁啦~`}</div>
}

export default App
 