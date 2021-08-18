import { useEffect, useState } from 'react'

import InputContainer from './components/InputContainer'
import Timetable from './components/Timetable'
import './css/App.css'
import './css/Input.css'
import './css/Timetable.css'

function App() {
  const [data, setData] = useState([])
  const [groupedData, setGroupedData] = useState([
    [
      {code: 'CSCI 152', start: 0, end: 5, startTime: '0900', endTime: '1300'},
      {code: 'CSCI 22', start: 4, end: 7, startTime: '1200', endTime: '1500'}
    ], [], [], [], [], []])

  useEffect(() => {
    console.log('data changed!')
  }, data)

  return (
    <div className="app">
      <InputContainer />
      <Timetable data={groupedData} />
    </div>
  )
}

export default App