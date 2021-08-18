import { useEffect, useState } from 'react'

import InputContainer from './components/InputContainer'
import Timetable from './components/Timetable'
import './css/App.css'
import './css/Input.css'
import './css/Timetable.css'

function App() {
  const [data, setData] = useState([])
  const [groupedData, setGroupedData] = useState({
    start: 9,
    end: 15,
    data: [
      [
        {code: 'CSCI 152', start: 9, end: 12, startTime: '0900', endTime: '1200'},
        {code: 'CSCI 22', start: 11, end: 15, startTime: '1100', endTime: '1500'}
      ], [], [], [], [], []
    ]
  })

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