import { useState } from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    </div>
  )
}

export default App
