import { useEffect, useState } from 'react'

import InputContainer from './components/InputContainer'
import Timetable from './components/Timetable'
import './css/App.css'
import './css/Input.css'
import './css/Modal.css'
import './css/Timetable.css'

function App() {
  const [data, setData] = useState([
    {
      color: 'red',
      code: 'CSCI 30',
      courses: [
        {
          "code": "CSCI 30",
          "section": "A",
          "name": "DATA STRUCTURES AND ALGORITHMS",
          "units": "3",
          "time": "T-TH 0930-1100",
          "room": "TBA",
          "instructor": "GUADALUPE, Brian Christopher",
          "max_slots": "35",
          "lang": "ENG",
          "level": "U",
          "free_slots": "0",
          "remarks": "ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.",
          "s": "N",
          "p": "N",
          selected: false
        }, {
          "code": "CSCI 30",
          "section": "B",
          "name": "DATA STRUCTURES AND ALGORITHMS",
          "units": "3",
          "time": "T-TH 1100-1230",
          "room": "TBA",
          "instructor": "GUADALUPE, Brian Christopher",
          "max_slots": "35",
          "lang": "ENG",
          "level": "U",
          "free_slots": "0",
          "remarks": "ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.",
          "s": "N",
          "p": "N",
          selected: true
        }, {
          "code": "CSCI 30",
          "section": "C",
          "name": "DATA STRUCTURES AND ALGORITHMS",
          "units": "3",
          "time": "T-TH 1100-1230",
          "room": "TBA",
          "instructor": "PANGAN, Zachary",
          "max_slots": "35",
          "lang": "ENG",
          "level": "U",
          "free_slots": "8",
          "remarks": "ALL SLOTS FOR BS CS MAJORS. ALL SLOTS FOR BSMS CS MAJORS. ALL SLOTS FOR BS CS-DGDD MAJORS.",
          "s": "N",
          "p": "N",
          selected: false
        }
      ]
    }
  ])
  const [groupedData, setGroupedData] = useState({
    start: 8,
    end: 17,
    data: [
      [
        {code: 'MATH 51.3', start: 8, end: 9, startTime: '08:00 AM', endTime: '09:00 AM'},
        {code: 'ArtAp 10', start: 9, end: 10, startTime: '09:00 AM', endTime: '10:00 AM'},
        {code: 'PHYS 23.11', start: 11, end: 12, startTime: '11:00 AM', endTime: '12:00 PM'},
      ], [
        {code: 'PHYED 161', start: 9, end: 10, startTime: '09:00 AM', endTime: '10:00 AM'},
        {code: 'CSCI 30', start: 11, end: 12.5, startTime: '11:00 AM', endTime: '12:30 PM'},
        {code: 'PHILO 11.04', start: 14, end: 15.5, startTime: '02:00 PM', endTime: '03:30 PM'},
        {code: 'MATH 30.24', start: 15.5, end: 17, startTime: '03:30 PM', endTime: '05:00 PM'},
      ], [
        {code: 'MATH 51.3', start: 8, end: 9, startTime: '08:00 AM', endTime: '09:00 AM'},
        {code: 'ArtAp 10', start: 9, end: 10, startTime: '09:00 AM', endTime: '10:00 AM'},
        {code: 'PHYS 23.11', start: 11, end: 12, startTime: '11:00 AM', endTime: '12:00 PM'},
        {code: 'PHYS 23.12', start: 13, end: 15, startTime: '01:00 PM', endTime: '03:00 PM'},
      ], [
        {code: 'PHYED 161', start: 9, end: 10, startTime: '09:00 AM', endTime: '10:00 AM'},
        {code: 'CSCI 30', start: 11, end: 12.5, startTime: '11:00 AM', endTime: '12:30 PM'},
        {code: 'PHILO 11.04', start: 14, end: 15.5, startTime: '02:00 PM', endTime: '03:30 PM'},
        {code: 'MATH 30.24', start: 15.5, end: 17, startTime: '03:30 PM', endTime: '05:00 PM'},
      ], [
        {code: 'MATH 51.3', start: 8, end: 9, startTime: '08:00 AM', endTime: '09:00 AM'},
        {code: 'ArtAp 10', start: 9, end: 10, startTime: '09:00 AM', endTime: '10:00 AM'},
        {code: 'PHYS 23.11', start: 11, end: 12, startTime: '11:00 AM', endTime: '12:00 PM'},
        {code: 'PHYS 23.12', start: 13, end: 15, startTime: '01:00 PM', endTime: '03:00 PM'},
      ], []
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
      <InputContainer data={data} onManualSubmit={onManualSubmit} onCopySubmit={onCopySubmit} />
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