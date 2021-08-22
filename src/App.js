import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { randomColor } from 'randomcolor'

import InputHeader from './components/InputHeader'
import InputRow from './components/InputRow'
import PreEnlistedRow from './components/PreEnlistedRow'
import Timetable from './components/Timetable'

import CopyModal from './components/CopyModal'

import './css/App.css'
import './css/Input.css'
import './css/Modal.css'
import './css/Timetable.css'

function App() {
  const [preEnlistedData, setPreEnlistedData] = useState([])
  const [data, setData] = useState([
    {
      color: randomColor(),
      keyCode: uuidv4(),
      courses: []
    }
  ])
  const [groupedData, setGroupedData] = useState({
    start: 8,
    end: 17,
    data: []
  })

  useEffect(() => {
    // rebuild timetable
    let nstart = 24
    let nend = 0
    let ndata = [[], [], [], [], []]

    const daysOfWeek = ['M', 'T', 'W', 'TH', 'F', 'S']

    // adding pre-enlisted
    preEnlistedData.forEach((row) => {
      let schedLoc = row.schedLoc
      let rawDays = schedLoc.split('/')[0].split(' ')[0]
      let days = []
      for (let i = 0; i < 6; i++) {
        if (rawDays.includes(daysOfWeek[i]) || rawDays.includes('D')) days[i] = true
        else days[i] = false
      }

      let rstart = parseInt(schedLoc.split('/')[0].split(' ')[1].split('-')[0]) // in xxxx form
      let rend = parseInt(schedLoc.split('/')[0].split(' ')[1].split('-')[1]) // in xxxx form
      
      let rstart_hr = Math.floor(rstart/100) + (rstart%100)/60
      let rend_hr = Math.floor(rend/100) + (rend%100)/60

      if (rstart_hr < nstart) nstart = rstart_hr
      if (rend_hr > nend) nend = rend_hr

      let st_hr = Math.floor(rstart/100)
      let ed_hr = Math.floor(rend/100)

      for (let i = 0; i < 6; i++) {
        if (days[i]) {
          ndata[i].push({
            color: row.color, // random
            code: row.code,
            start: rstart_hr, // in x.x form
            end: rend_hr, // in x.x form
            startTime: `${st_hr > 12 ? st_hr-12 : st_hr}:${Math.floor(rstart%100).toString().padStart(2, '0')} ${rstart < 1200 ? 'AM' : 'PM'}`,
            endTime: `${ed_hr > 12 ? ed_hr-12 : ed_hr}:${Math.floor(rend%100).toString().padStart(2, '0')} ${rend < 1200 ? 'AM' : 'PM'}`
          })
        }
      }
    })

    // adding selected input
    data.forEach((group) => {
      for (let i = 0; i < group.courses.length; i++) {
        if (group.courses[i].selected) {
          let rawDays = group.courses[i].time.split(' ')[0]
          let days = []
          for (let j = 0; j < 6; j++) {
            if (rawDays.includes(daysOfWeek[j]) || rawDays.includes('D')) days[j] = true
            else days[j] = false
          }

          let intStart = parseInt(group.courses[i].time.split(' ')[1].split('-')[0]) // in xxxx form
          let intEnd = parseInt(group.courses[i].time.split(' ')[1].split('-')[1]) // in xxxx form

          let rstart_hr = Math.floor(intStart/100) + (intStart%100)/60 // in x.x form
          let rend_hr = Math.floor(intEnd/100) + (intEnd%100)/60 // in x.x form

          if (rstart_hr < nstart) nstart = rstart_hr
          if (rend_hr > nend) nend = rend_hr

          let st_hr = Math.floor(intStart/100)
          let ed_hr = Math.floor(intEnd/100)

          for (let j = 0; j < 6; j++) {
            if (days[j]) {
              ndata[j].push({
                color: group.color,
                code: group.courses[i].code,
                start: rstart_hr, // in x.x form
                end: rend_hr, // in x.x form
                startTime: `${st_hr > 12 ? st_hr-12 : st_hr}:${(intStart%100).toString().padStart(2, '0')} ${rstart_hr < 12 ? 'AM' : 'PM'}`,
                endTime: `${ed_hr > 12 ? ed_hr-12 : ed_hr}:${(intEnd%100).toString().padStart(2, '0')} ${rend_hr < 12 ? 'AM' : 'PM'}`
              })
            }
          }

          break
        }
      }
    })

    // change state
    setGroupedData({
      start: nstart,
      end: nend,
      data: ndata
    })
  }, [preEnlistedData, data])


  const selectClassFromGroup = (kc, code, section) => {
    let nrd = data

    nrd.forEach((group) => {
      if (group.keyCode === kc) {
        group.courses.forEach((row) => {
          if (row.code === code && row.section === section) row.selected = true
          else row.selected = false
        })
      }
    })

    setData([...nrd])
  }


  const onManualAddSubmit = (kc, d) => {}

  const onCopySubmit = (kc, d) => {
    setCopyModalCode(null)

    let raw_rows = d.split('\n')
    let new_data = []

    if (kc !== -1) {
      raw_rows.forEach((row) => {
        let cols = row.split('\t')

        if (cols.length === 14) {
          let rawDays = cols[4].split(' ')[0].toUpperCase()
          const daysOfWeek = ['M', 'T', 'W', 'TH', 'F', 'S']
          let days = []
          for (let i = 0; i < 6; i++) {
            if (rawDays.includes(daysOfWeek[i]) || rawDays.includes('D')) days[i] = true
            else days[i] = false
          }

          let st = parseInt(cols[4].split(' ')[1].split('-')[0])
          let en = parseInt(cols[4].split(' ')[1].split('-')[1])

          new_data.push({
            code: cols[0],
            section: cols[1],
            name: cols[2],
            units: cols[3],
            time: cols[4], // raw string
            room: cols[5],
            instructor: cols[6],
            max_slots: cols[7],
            lang: cols[8],
            level: cols[9], // not needed
            free_slots: cols[10],
            remarks: cols[11],
            s: cols[12], // not needed
            p: cols[13], // not needed
            selected: false, // default
            _days: days,
            _start: Math.floor(st/100) + (st%100)/100, // in x.x (hr) form
            _end: Math.floor(en/100) + (st%100)/100, // in x.x (hr) form
          })
        }
      })

      let nrd = data
      nrd.forEach((group) => {
        if (group.keyCode === kc) {
          group.courses.push(...new_data)
        }
      })

      // create new group if last has data
      if (nrd.length > 0 && nrd[nrd.length-1].courses.length > 0) {
        nrd.push({
          color: randomColor(),
          keyCode: uuidv4(),
          courses: []
        })
      }

      setData(nrd)
    } else {
      let nrped = preEnlistedData

      raw_rows.forEach((row) => {
        let cols = row.split('\t')

        if (cols.length === 8) {
          new_data.push({
            code: cols[0],
            units: cols[1], // not needed
            title: cols[2],
            section: cols[3],
            instructor: cols[4],
            schedLoc: cols[5], // T-TH 1400-1600 / TBA
            credit: cols[6], // not needed
            remarks: cols[7], // not needed
            color: randomColor(), // random
          })
        }
      })

      setPreEnlistedData([...nrped, ...new_data])

      console.log(preEnlistedData)
    }
  }


  const [manualAddCode, setManualAddCode] = useState(null)
  const [copyModalCode, setCopyModalCode] = useState(null)

  const deleteGroup = (kc) => setData(data.filter((group) => group.keyCode !== kc))
  const deleteRow = (kc, code, section) => {
    if (kc !== -1) {
      let nrd = data

      nrd.forEach((group) => {
        if (group.keyCode === kc) {
          for (let i = group.courses.length - 1; i >= 0; i--) {
            if (group.courses[i].code === code && group.courses[i].section === section)
              group.courses.splice(i, 1)
          }
        }
      })

      setData([...nrd])
    } else {
      let nrped = preEnlistedData

      for (let i = nrped.length - 1; i >= 0; i--) {
        if (nrped[i].code === code && nrped[i].section)
          nrped.splice(i, 1)
      }

      setPreEnlistedData([...nrped])
    }
  }


  const emptyTextStyle = {
    textAlign: 'center',
    margin: '16px auto',
    maxWidth: '768px'
  }


  return (
    <div className="app">
      <div style={{ overflowY: 'scroll' }}>
        {/* modals */}
        {
          // manualAddCode != null && <AddModal
          //   keyCode={manualAddCode}
          //   onAddClick={() => {}}
          //   onExitClick={() => {}} />
        }
        {
          copyModalCode != null && <CopyModal
            keyCode={copyModalCode}
            onAddClick={onCopySubmit}
            onExitClick={() => setCopyModalCode(null)} />
        }

        <header>
          <h3>Enlistment Scheduler</h3>
        </header>

        {/* pre-enlisted header */}
        <InputHeader
          onAddClick={() => {}}
          onCopyClick={() => setCopyModalCode(-1)}
          isPreEnlisted={true} />
        {/* pre-enlisted rows or empty text */}
        {
          preEnlistedData.length > 0
            ? preEnlistedData.map((row) =>
                <PreEnlistedRow
                  key={`PRE-ENLISTED_${row.code}_${row.section}`}
                  row={row}
                  onDelete={() => deleteRow(-1, row.code, row.section)} />
              )
            : <p style={emptyTextStyle}>
                Looks like you haven't added any pre-enlisted classes yet! If you have any, click the <strong>Manual Add</strong> or <strong>Paste from AISIS</strong> buttons to add.
              </p>
        }

        {/* build headers and rows */}
        {data.map((group) =>
          <div key={`INPUT-GROUP_${group.keyCode}`}>
            <InputHeader
              key={`INPUT-HEADER_${group.code}`}
              color={group.color}
              onAddClick={() => {}}
              onCopyClick={() => setCopyModalCode(group.keyCode)}
              onDeleteClick={() => deleteGroup(group.keyCode)} />

            {
              group.courses.length > 0
                ? group.courses.map((row) =>
                  <InputRow
                    key={`INPUT-ROW_${group.keyCode}_${row.code}_${row.section}`}
                    row={row}
                    onSelect={() => selectClassFromGroup(group.keyCode, row.code, row.section)}
                    onDelete={() => deleteRow(group.keyCode, row.code, row.section)} />)
                : <p style={emptyTextStyle}>
                    Click the <strong>Manual Add</strong> or <strong>Paste from AISIS</strong> buttons to add any classes!
                  </p>
            }
          </div>
        )}
      </div>

      <Timetable data={groupedData} />

      {/* footer */}
      <footer>
        <p>&copy; Emman Evangelista &bull; v.1.0.2-build</p>
      </footer>
    </div>
  )
}

export default App