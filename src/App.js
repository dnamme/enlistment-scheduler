import { useEffect, useState } from 'react'

import InputContainer from './components/InputContainer'
import Timetable from './components/Timetable'
import './css/App.css'
import './css/Input.css'
import './css/Modal.css'
import './css/Timetable.css'

function App() {
  const [data, setData] = useState([])
  const [groupedData, setGroupedData] = useState({
    start: 8,
    end: 17,
    data: [
      [
        {code: 'MATH 51.3', start: 8, end: 9, startTime: '0800', endTime: '0900'},
        {code: 'ArtAp 10', start: 9, end: 10, startTime: '0900', endTime: '1000'},
        {code: 'PHYS 23.11', start: 11, end: 12, startTime: '1100', endTime: '1200'},
      ], [
        {code: 'PHYED 161', start: 9, end: 10, startTime: '0900', endTime: '1000'},
        {code: 'CSCI 30', start: 11, end: 12.5, startTime: '1100', endTime: '1230'},
        {code: 'PHILO 11.04', start: 14, end: 15.5, startTime: '1400', endTime: '1530'},
        {code: 'MATH 30.24', start: 15.5, end: 17, startTime: '1530', endTime: '1700'},
      ], [
        {code: 'MATH 51.3', start: 8, end: 9, startTime: '0800', endTime: '0900'},
        {code: 'ArtAp 10', start: 9, end: 10, startTime: '0900', endTime: '1000'},
        {code: 'PHYS 23.11', start: 11, end: 12, startTime: '1100', endTime: '1200'},
        {code: 'PHYS 23.12', start: 13, end: 15, startTime: '1300', endTime: '1500'},
      ], [
        {code: 'PHYED 161', start: 9, end: 10, startTime: '0900', endTime: '1000'},
        {code: 'CSCI 30', start: 11, end: 12.5, startTime: '1100', endTime: '1230'},
        {code: 'PHILO 11.04', start: 14, end: 15.5, startTime: '1400', endTime: '1530'},
        {code: 'MATH 30.24', start: 15.5, end: 17, startTime: '1530', endTime: '1700'},
      ], [
        {code: 'MATH 51.3', start: 8, end: 9, startTime: '0800', endTime: '0900'},
        {code: 'ArtAp 10', start: 9, end: 10, startTime: '0900', endTime: '1000'},
        {code: 'PHYS 23.11', start: 11, end: 12, startTime: '1100', endTime: '1200'},
        {code: 'PHYS 23.12', start: 13, end: 15, startTime: '1300', endTime: '1500'},
      ],
    ]
  })

  useEffect(() => {
    console.log('data changed!')
  }, data)


  const onManualSubmit = () => {}

  const onCopySubmit = (data) => {}


  return (
    <div className="app">
      <InputContainer onManualSubmit={onManualSubmit} onCopySubmit={onCopySubmit} />
      <Timetable data={groupedData} />
    </div>
  )
}

export default App