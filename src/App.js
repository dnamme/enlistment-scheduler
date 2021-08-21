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
  }, [data])


  const onManualSubmit = (d) => {}

  const onCopySubmit = (d) => {
    let raw_rows = d.split('\n')
    let new_data = []

    raw_rows.forEach((row) => {
      let cols = row.split('\t')

      if (cols.length === 14) {
        new_data.push({
          code: cols[0],
          section: cols[1],
          name: cols[2],
          units: cols[3],
          time: cols[4],
          room: cols[5],
          instructor: cols[6],
          max_slots: cols[7],
          lang: cols[8],
          level: cols[9], // not needed
          free_slots: cols[10],
          remarks: cols[11],
          s: cols[12], // not needed
          p: cols[13], // not needed
        })
      }
    })

    console.log(new_data)
  }


  return (
    <div className="app">
      <InputContainer onManualSubmit={onManualSubmit} onCopySubmit={onCopySubmit} />
      <Timetable data={groupedData} />
    </div>
  )
}

export default App

/*

CSCI 30	A	DATA STRUCTURES AND ALGORITHMS	3	T-TH 0930-1100	TBA	GUADALUPE, Brian Christopher	35	ENG	U	0	ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.	N	N
CSCI 30	B	DATA STRUCTURES AND ALGORITHMS	3	T-TH 1100-1230	TBA	GUADALUPE, Brian Christopher	35	ENG	U	0	ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.	N	N
CSCI 30	C	DATA STRUCTURES AND ALGORITHMS	3	T-TH 1100-1230	TBA	PANGAN, Zachary	35	ENG	U	8	ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.	N	N

CSCI 30	A	DATA STRUCTURES AND ALGORITHMS	3	T-TH 0930-1100	TBA	GUADALUPE, Brian Christopher	35	ENG	U	0	ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.	N	N
CSCI 31	B	DATA STRUCTURES AND ALGORITHMS	3	T-TH 1100-1230	TBA	GUADALUPE, Brian Christopher	35	ENG	U	0	ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.	N	N
CSCI 32	C	DATA STRUCTURES AND ALGORITHMS	3	T-TH 1100-1230	TBA	PANGAN, Zachary	35	ENG	U	8	ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.	N	N

CSCI 30	A	DATA STRUCTURES AND ALGORITHMS	3	T-TH 0930-1100	TBA	GUADALUPE, Brian Christopher	35	ENG	U	0	aaa	N	N
CSCI 31	B	DATA STRUCTURES AND ALGORITHMS	3	T-TH 1100-1230	TBA	GUADALUPE, Brian Christopher	35	ENG	U	0	aaa	N	N
CSCI 32	C	DATA STRUCTURES AND ALGORITHMS	3	T-TH 1100-1230	TBA	PANGAN, Zachary	35	ENG	U	8	aaa	N	N



*/